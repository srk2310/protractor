exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['GeneralDonation.js'],
    //multiCapabilities: [{
     // browserName: 'firefox'
    //}, {
     // browserName: 'chrome'
   // }]
     framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters = require('/Users/shravani/Documents/Automation/protractor/node_modules');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
         }

  }