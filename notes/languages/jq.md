# JQ

[jq](https://stedolan.github.io/jq/)

> jq is like `sed` for JSON data - you can use it to slice and filter and map and transform structured data with the same ease that `sed`, `awk`, `grep` and friends let you play with text.

## Questions


* [Flatten nested JSON using jq](https://stackoverflow.com/q/37540717/1366033)

  ```none
  [leaf_paths as $path | {"key": $path | join("."), "value": getpath($path)}] | from_entries
  ```


