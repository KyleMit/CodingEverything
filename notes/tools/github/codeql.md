# CodeQL

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

