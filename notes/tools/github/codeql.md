# CodeQL


## About

* [About code scanning with CodeQL - GitHub Docs](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql)
* [Configuring code scanning at scale using CodeQL - GitHub Docs](https://docs.github.com/en/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning-at-scale#eligible-repositories-for-codeql-default-setup)

* [github/codeql-action](https://github.com/github/codeql-action/tree/v2)
  * [../init](https://github.com/github/codeql-action/tree/v2/init)
  * [../autobuild](https://github.com/github/codeql-action/tree/v2/autobuild)
  * [../analyze](https://github.com/github/codeql-action/tree/v2/analyze)
  * [../upload-sarif](https://github.com/github/codeql-action/tree/v2/upload-sarif)

* [CodeQL language support](https://aka.ms/codeql-docs/language-support)

## CodeQL CLI

* [Getting started with the CodeQL CLI - GitHub Docs](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli)
* [Setting up the CodeQL CLI - GitHub Docs](https://docs.github.com/en/code-security/codeql-cli/getting-started-with-the-codeql-cli/setting-up-the-codeql-cli)

## SARIF

* **SARIF** - [Static Analysis Results Interchange Format](http://docs.oasis-open.org/sarif/sarif/v2.0/csprd01/sarif-v2.0-csprd01.html)

* [SARIF support for code scanning](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)

* [Sarif Viewer - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=MS-SarifVSCode.sarif-viewer)


## Rules

### JavaScript

* [Shell command built from environment values](https://codeql.github.com/codeql-query-help/javascript/js-shell-command-injection-from-environment/)

  * [Command Injection | OWASP Foundation](https://owasp.org/www-community/attacks/Command_Injection)
  * [CWE - CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection') (4.11)](https://cwe.mitre.org/data/definitions/78.html)
  * [CWE - CWE-88: Improper Neutralization of Argument Delimiters in a Command ('Argument Injection') (4.11)](https://cwe.mitre.org/data/definitions/88.html)

  **Bad**

  ```js
  var cp = require("child_process"),
    path = require("path");
  function cleanupTemp() {
    let cmd = "rm -rf " + path.join(__dirname, "temp");
    cp.execSync(cmd); // BAD
  }
  ```

  **Good**

  ```js
  var cp = require("child_process"),
    path = require("path");
  function cleanupTemp() {
    let cmd = "rm",
      args = ["-rf", path.join(__dirname, "temp")];
    cp.execFileSync(cmd, args); // GOOD
  }
  ```

