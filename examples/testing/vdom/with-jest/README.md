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

## Testing
```bash
npm test 
```