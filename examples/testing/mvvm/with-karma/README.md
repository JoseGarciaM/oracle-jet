# Example Testing Oracle JET MVVM with Karma

Learn how to test a MVVM Oracle JET app.

## Prerequesites
1) [Install Node.js](https://docs.oracle.com/en/middleware/developer-tools/jet/10/develop/choose-development-environment-oracle-jet.html#GUID-2B7F94A4-0699-47B6-96A9-C6E94B1BCF10)

2) Install Oracle JET Tooling

```bash
[sudo] npm install -g @oracle/ojet-cli
```
3) Create JET project

```bash
ojet create <nameofproject>
```
4) Install Karma CLI

```bash
[sudo] npm install -g karma-cli
```
5) Add testing dependencies

```bash
npm i jasmine-core karma-chrome-launcher karma-coverage karma-jasmine karma-requirejs 
```
6) Add testing dev dependencies

```bash
npm i -D karma qunit qunit-reporter-junit
```

## Testing
1) Create tests folder inside the root of the project

```bash
mkdir tests
```