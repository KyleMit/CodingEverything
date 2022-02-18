# JQ

[jq](https://stedolan.github.io/jq/)

> jq is like `sed` for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that `sed`, `awk`, `grep` and friends let you play with text.

## Questions


* [Flatten nested JSON using jq](https://stackoverflow.com/q/37540717/1366033)

  ```none
  [leaf_paths as $path | {"key": $path | join("."), "value": getpath($path)}] | from_entries
  ```


## WinGet Installation

* [Support for installation of portable/standalone apps · Issue #182](https://github.com/microsoft/winget-cli/issues/182)
* [stedolan.jq version 1.6 by mnpenner - PR #43960](https://github.com/microsoft/winget-pkgs/pull/43960)
* [StephenDolan.jq version 1.6 by nickmccurdy - PR #29559](https://github.com/microsoft/winget-pkgs/pull/29559)
