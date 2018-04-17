# protractor
The locators are passed to the element function, as below:

element(by.css('some-css'));
element(by.model('item.name'));
element(by.binding('item.name'));
When using CSS Selectors as a locator, you can use the shortcut $() notation:

$('my-css');

// Is the same as:

element(by.css('my-css'));


2.Login code in config file:
Another option is to put your log-in code into an onPrepare function, which will be run once before any of your tests.

3.Generate Reports using Jasmine Reporters

Protractor supports Jasmine reporters to generate test reports. In this section, we will use JunitXMLReporter to generate Test execution reports automatically in XML format.

Follow the below steps to generate reports in XML format.

Installation of Jasmine Reporter
There are two way you can do this, locally or globally

Open command prompt execute the following command to install locally
npm install --save-dev jasmine-reporters@^2.0.0			
Above command will install jasmine reports node-modules locally means from the directory where we are running the command in command prompt.

Open command prompt execute the following command for global installation
npm install –g jasmine-reporters@^2.0.0
In this tutorial, we will install the jasmine reporters locally.

Step 1) Execute the command.

npm install --save-dev jasmine-reporters@^2.0.0
from the command prompt like below.

Protractor Testing

Step 2) Check the installation folders in the directory. " Node_modules" should be available if it is successfully installed like in below snapshot.

Protractor Testing

Step 3) Add the following colored code to an existed conf.js file

exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      capabilities: {
          'browserName': 'firefox'
      },
      specs: ['spec.js'],
     framework: 'jasmine2' ,
      onPrepare: function() {
          var jasmineReporters = require('C:/Users/RE041943/Desktop/guru/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };
Explanation of code:

In code, we are generating the report "JUnitXmlReporter" and giving the Path where to store the report.

Step 4) Open the command prompt and execute command protractor conf.js.

Protractor Testing

Step 5) When you execute the above code, junitresults.xml will be generated in mentioned path.

Protractor Testing

Step 6) Open the XML and verify the result. The failure message is shown in the result file as our Test Case is failed. The Test case is failed as because of the Expected Result from "spec.js" is not matched with the Actual result from a Web page

Protractor Testing

Step 7) Use the junitresult.xml file for evidences or result files.

Summary:

Though Selenium can do some of the things what protractor does, the protractor is the industrial standard and best practice to test AngularJS applications. A Protractor can also manage multiple capabilities in it and handle the dynamic changes of web elements using ng-model, ng-click.., etc.. (Which selenium cannot do).



