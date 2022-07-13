# Example Testing Oracle JET MVVM with Karma

## Prerequesites
1) [Install Node.js](https://docs.oracle.com/en/middleware/developer-tools/jet/10/develop/choose-development-environment-oracle-jet.html#GUID-2B7F94A4-0699-47B6-96A9-C6E94B1BCF10)

2) Install Oracle JET Tooling

```bash
[sudo] npm install -g @oracle/ojet-cli
```
3) Restore and build JET project

```bash
ojet restore
ojet build
```
4) Install Karma CLI

```bash
[sudo] npm install -g karma-cli
```

```
5) Add testing dev dependencies

```bash
npm i -D @types/chai @types/karma-fixture @types/mocha @types/sinon chai karma karma-chai karma-chrome-launcher karma-coverage karma-fixture karma-mocha karma-mocha-reporter karma-requirejs karma-sinon karma-typescript sinon ts-sinon
```

## Testing
### Karma
Karma is the test runner, and its main purposes are to:
- Run an HTTP server to make files available to the browser
- Launch and manage the browser instances
- Load the necessary files into the browser to start the tests
- Monitor the test results from the browser and report them
Its main configuration file, karma.conf.js, is included in the zip.
### RequireJS
Since JET currently relies on RequireJS to dynamically load modules, Karma's role is simply to load RequireJS into the browser and execute its configuration file test-main.js. Find the file under the cca-sample-test/test/ folder. The file has three main parts:
- Find only the test (spec) files from the list of all served-up Karma files
- Configure the RequireJS paths array*
- Start the Karma test callback
Note that the paths array in test-main.js must be kept up-to-date with the mapping from the application's main.js. This may change in the future with newer versions that automatically update itself.
### Tests in Typescript
While it's not required that tests be written in TypeScript, it's highly recommended. If properly configured and types declared, TypeScript is invaluable to testers and developers alike, by providing design-time and compile-time feedback on the correct API usage of the code. All JET libraries have corresponding type definitions available.
This sample project uses the plugin karma-typescript to allow the TypeScript-to-JavaScript compilation process to be automatically done before each execution, without needing to run tsc at the command line.
### Configuration
The included ./tsconfig.json defines the settings for compiling the TypeScript under src/ts into JavaScript. This directory contains the source for the demo-card composite component which, through the ojet CLI, will be compiled to JavaScript.
The test directory contains the test specification (spec) files and its own tsconfig.json since the path requirements for the test differ from the component. This file extends from the original tsconfig.json in the root directory, but overrides it with test-specific settings.
### Running the tests
To run the suite of tests, execute npm test at the command line (this is a script alias within package.json that calls karma start). The Karma process will start the browser and execute all of the tests in the project. Once the initial run is completed, Karma will continually monitor any changes to the test files and automatically redeploy them to the browser to be run again. Any errors during the test run will also be shown in the terminal.
#### Debugging
The Karma test page acts as a mediator between the server process (started from command line) and the test running against the application. Its purpose is to instruct the tests to run, and collect information on the success/failures to relay back to the reporters.
Debugging Karma tests is done using the browser's developer tools debugger (Chrome Debugger) and Karma's own Debug page. To begin debugging a test, click on the Debug button in the Karma window.