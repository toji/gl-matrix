if (phantom.state.length === 0) {
    if (phantom.args.length === 0) {
        console.log("Simple JasmineBDD test runner for phantom.js");
        console.log("Usage: phantomjs-testrunner.js url_to_runner.html");
        console.log("Accepts http:// and file:// urls");
        console.log("");
        console.log("NOTE: This script depends on jasmine.TrivialReporter being used\non the page, for the DOM elements it creates.\n");
        phantom.exit();
    } else {
        var address = phantom.args[0];
        phantom.state = "run-jasminebdd";
        //console.log('Loading ' + address);
        phantom.open(address);
    }
} else {
    if (phantom.loadStatus === 'success') {
        var finishedDiv = document.getElementsByClassName("finished-at")[0];
        var _setInterval = jasmine.Clock.real.setInterval;
        _setInterval(function(){
            if (finishedDiv.innerHTML.length) {
                var results = document.getElementsByClassName("description")[0].innerHTML.match(/(\d+) spec.* (\d+) failure.*/);
                var specs = Number(results[1]);
                var failures = Number(results[2]);
                console.log(""); // insert blank line
                if (failures > 0) {
                    console.error("FAILURE: " + results[0]);
                    phantom.exit(1);
                }
                else {
                    console.log("SUCCESS: " + results[0]);
                    phantom.exit(0);
                }
            }
        }, 100);
    } else {
        console.log("Failed to load the specified url");
        phantom.exit(1);
    }
}
