global.testClass = (description, specDefinitions) ->
    suite = jasmine.getEnv().describe('Class: ' + description, specDefinitions)
    suite.tags = ['class']
    suite.isIntermediate = true;
    suite

global.feature = (description, specDefinitions) ->
    suite = jasmine.getEnv().describe('Feature: ' + description, specDefinitions)
    suite.tags = ['feature']
    suite.isIntermediate = true;
    suite

global.scenario = (desc, func) ->
    suite = jasmine.getEnv().describe('Scenario: ' + desc, func)
    suite.tags = ['scenario']
    suite.isIntermediate = true;
    suite

global.should = (description, specDefinitions) ->
    suite = jasmine.getEnv().it('It should ' + description, specDefinitions)
    suite.tags = ['should']
    suite
