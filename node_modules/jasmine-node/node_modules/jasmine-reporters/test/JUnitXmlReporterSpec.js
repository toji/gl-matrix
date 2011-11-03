(function(){
    var env, spec, suite, reporter, runner;
    function fakeSpec(suite, name) {
        var s = new jasmine.Spec(env, suite, name);
        suite.add(s);
        return s;
    }
    function fakeSuite(name, parentSuite) {
        var s = new jasmine.Suite(env, name, null, parentSuite || null);
        if (parentSuite) {
            parentSuite.add(s);
        }
        runner.add(s);
        return s;
    }

    // make sure reporter is set before calling this
    function triggerSuiteEvents(suites) {
        for (var i=0; i<suites.length; i++) {
            var s = suites[i];
            for (var j=0; j<s.specs().length; j++) {
                reporter.reportSpecStarting(s.specs()[j]);
                reporter.reportSpecResults(s.specs()[j]);
            }
            reporter.reportSuiteResults(s);
        }
    }

    describe("JUnitXmlReporter", function(){

        beforeEach(function(){
            env = new jasmine.Env();
            env.updateInterval = 0;
            runner = new jasmine.Runner(env);

            suite = fakeSuite("ParentSuite");
            spec = fakeSpec(suite, "should be a dummy with invalid characters: & < > \" '");
            reporter = new jasmine.JUnitXmlReporter();
        });

        describe("constructor", function(){
            it("should default path to an empty string", function(){
                expect(reporter.savePath).toEqual("");
            });
            it("should default consolidate to true", function(){
                expect(reporter.consolidate).toBe(true);
            });
            it("should default useDotNotation to true", function(){
                expect(reporter.useDotNotation).toBe(true);
            });
        });

        describe("reportSpecStarting", function(){
            it("should add start time", function(){
                reporter.reportSpecStarting(spec);
                expect(spec.startTime).not.toBeUndefined();
            });
            it("shound add start time to the suite", function(){
                expect(suite.startTime).toBeUndefined();
                reporter.reportSpecStarting(spec);
                expect(suite.startTime).not.toBeUndefined();
            });
            it("should not add start time to the suite if it already exists", function(){
                var a = new Date();
                suite.startTime = a;
                reporter.reportSpecStarting(spec);
                expect(suite.startTime).toBe(a);
            });
        });

        describe("reportSpecResults", function(){
            beforeEach(function(){
                reporter.reportSpecStarting(spec);
                //spec.results_ = fakeResults();
                reporter.reportSpecResults(spec);
            });
            it("should compute duration", function(){
                expect(spec.duration).not.toBeUndefined();
            });
            it("should generate <testcase> output", function(){
                expect(spec.output).not.toBeUndefined();
                expect(spec.output).toContain("<testcase");
            });
            it("should escape bad xml characters in spec description", function() {
                expect(spec.output).toContain("&amp; &lt; &gt; &quot; &apos;");
            });
            it("should generate valid xml <failure> output if test failed", function(){
                // this one takes a bit of setup to pretend a failure
                spec = fakeSpec(suite, "should be a dummy");
                reporter.reportSpecStarting(spec);
                var expectationResult = new jasmine.ExpectationResult({
                    matcherName: "toEqual", passed: false, message: "Expected 'a' to equal '&'."
                });
                var results = {
                    passed: function() { return false; },
                    getItems: function() { return [expectationResult]; }
                };
                spyOn(spec, "results").andReturn(results);
                reporter.reportSpecResults(spec);
                expect(spec.output).toContain("<failure>");
                expect(spec.output).toContain("to equal &apos;&amp;");
            });
        });

        describe("reportSuiteResults", function(){
            beforeEach(function(){
                triggerSuiteEvents([suite]);
            });
            it("should compute duration", function(){
                expect(suite.duration).not.toBeUndefined();
            });
            it("should generate startTime if no specs were executed", function(){
                suite = fakeSuite("just a fake suite");
                triggerSuiteEvents([suite]);
                expect(suite.startTime).not.toBeUndefined();
            });
            it("should generate <testsuite> output", function(){
                expect(suite.output).not.toBeUndefined();
                expect(suite.output).toContain("<testsuite");
            });
            it("should contain <testcase> output from specs", function(){
                expect(suite.output).toContain("<testcase");
            });
        });

        describe("reportRunnerResults", function(){
            var subSuite, subSubSuite, siblingSuite;

            beforeEach(function(){
                subSuite = fakeSuite("SubSuite", suite);
                subSubSuite = fakeSuite("SubSubSuite", subSuite);
                siblingSuite = fakeSuite("SiblingSuite With Invalid Chars & < > \" ' | : \\ /");
                var subSpec = fakeSpec(subSuite, "should be one level down");
                var subSubSpec = fakeSpec(subSubSuite, "should be two levels down");
                var siblingSpec = fakeSpec(siblingSuite, "should be a sibling of Parent");

                spyOn(reporter, "writeFile");
                spyOn(reporter, "getNestedOutput").andCallThrough();
                triggerSuiteEvents([suite, subSuite, subSubSuite, siblingSuite]);
            });

            describe("general functionality", function() {
                beforeEach(function() {
                    reporter.reportRunnerResults(runner);
                });
                it("should remove invalid filename chars from the filename", function() {
                    expect(reporter.writeFile).toHaveBeenCalledWith("TEST-SiblingSuiteWithInvalidChars.xml", jasmine.any(String));
                });
                it("should remove invalid xml chars from the classname", function() {
                    expect(siblingSuite.output).toContain("SiblingSuite With Invalid Chars &amp; &lt; &gt; &quot; &apos; | : \\ /");
                });
            });

            describe("consolidated is true", function(){
                beforeEach(function(){
                    reporter.reportRunnerResults(runner);
                });
                it("should write one file per parent suite", function(){
                    expect(reporter.writeFile.callCount).toEqual(2);
                });
                it("should consolidate suite output", function(){
                    expect(reporter.getNestedOutput.callCount).toEqual(4);
                });
                it("should wrap output in <testsuites>", function(){
                    expect(reporter.writeFile.mostRecentCall.args[1]).toContain("<testsuites>");
                });
                it("should include xml header in every file", function(){
                    for (var i = 0; i < reporter.writeFile.callCount; i++) {
                        expect(reporter.writeFile.argsForCall[i][1]).toContain("<?xml");
                    }
                });
            });

            describe("consolidated is false", function(){
                beforeEach(function(){
                    reporter.consolidate = false;
                    reporter.reportRunnerResults(runner);
                });
                it("should write one file per suite", function(){
                    expect(reporter.writeFile.callCount).toEqual(4);
                });
                it("should not wrap results in <testsuites>", function(){
                    expect(reporter.writeFile.mostRecentCall.args[1]).not.toContain("<testsuites>");
                });
                it("should include xml header in every file", function(){
                    for (var i = 0; i < reporter.writeFile.callCount; i++) {
                        expect(reporter.writeFile.argsForCall[i][1]).toContain("<?xml");
                    }
                });
            });

            describe("dot notation is true", function(){
                beforeEach(function(){
                    reporter.reportRunnerResults(runner);
                });
                it("should separate descriptions with dot notation", function(){
                    expect(subSubSuite.output).toContain('classname="ParentSuite.SubSuite.SubSubSuite"');
                });
            });

            describe("dot notation is false", function(){
                beforeEach(function(){
                    reporter.useDotNotation = false;
                    triggerSuiteEvents([suite, subSuite, subSubSuite, siblingSuite]);
                    reporter.reportRunnerResults(runner);
                });
                it("should separate descriptions with whitespace", function(){
                    expect(subSubSuite.output).toContain('classname="ParentSuite SubSuite SubSubSuite"');
                });
            });
        });
    });
})();

