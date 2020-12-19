# JSON Schema Validation

## JSON Schema Store

* [JSON Schema Store](https://www.schemastore.org/json/)
  * [https://json.schemastore.org/github-action](https://json.schemastore.org/github-action)
  * [https://json.schemastore.org/github-workflow](https://json.schemastore.org/github-workflow)
  * [Example PR](https://github.com/SchemaStore/schemastore/pull/850)
    * [schemastore/catalog.json at master · SchemaStore/schemastore](https://github.com/SchemaStore/schemastore/blob/master/src/api/json/catalog.json#L1001-L1006)
    * [https://json.schemastore.org/jekyll](https://json.schemastore.org/jekyll)

## Yaml Validation in VS Code

* [Schema Validation for YAML](https://json-schema-everywhere.github.io/yaml)
* [YAML - Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml)
  * [redhat-developer/vscode-yaml](https://github.com/redhat-developer/vscode-yaml)
* [vscode-yaml-validation](https://github.com/djabraham/vscode-yaml-validation)
* [Autocompletion not showing up with conditional subschemas #222](https://github.com/redhat-developer/vscode-yaml/issues/222)

### `settings.json`

```json
{
  "yaml.schemas": {
    "monitors.schema.json": "monitors.d/*.yml"
  },

  "json.schemas": [
    {
      "fileMatch": ["monitors.d/*.json"],
      "url": "./monitors.schema.json"
    }
  ]
}
```

### `extensions.json`

```json
{
  "recommendations": ["redhat.vscode-yaml"],
}
```


## JSON Schema Definition

* [SchemaStore - Schemas](http://schemastore.org/json/)
  * [SchemaStore on github](https://github.com/schemastore/schemastore/)
* [JSON Schema Validator](https://www.jsonschemavalidator.net/)

[Mapping to a schema defined in settings](https://code.visualstudio.com/docs/languages/json#_mapping-to-a-schema-in-the-workspace)

```json
"json.schemas": [
    {
        "fileMatch": [
            "monitors.d/*.json"
        ],
        "url": "./heartbeat-schema.json"
    }
]
```

[Structuring a complex schema](https://json-schema.org/understanding-json-schema/structuring.html)

```json
{ "$ref": "definitions.json#/address" }
```

[JsonSchema - conditionally require attribute](https://stackoverflow.com/a/38781027/1366033)


[Applying subschemas conditionally](https://json-schema.org/understanding-json-schema/reference/conditionals.html)

```json

"anyOf": [
  {
    "properties": { "type": { "const": "icmp" } },
    "required": ["hosts"]
  },
  {
    "properties": {
      "controlType": {"const": "title"}
    },
    "required": ["controlType"]
  },
  {
    "properties": {
      "controlType": {"const": "button"}
    },
    "required": ["controlType"]
  }
],
```

```js
"allOf": [
  {
    "if": {
      "properties": { "type": { "const": "icmp" } }
    },
    "then": {
      "properties": {
        "hosts": {"$ref": "#/definitions/hosts"},
        "wait": {"$ref": "#/definitions/wait"}
      }
    }
  },
  {
    "if": {
      "properties": { "type": { "const": "tcp" } }
    },
    "then": {
      "properties": {
          "postal_code": { "pattern": "[A-Z][0-9][A-Z] [0-9][A-Z][0-9]" }
      }
    }
  },
  {
    "if": {
      "properties": { "type": { "const": "http" } }
    },
    "then": {
      "properties": {
          "postal_code": { "pattern": "[0-9]{4} [A-Z]{2}" }
      }
    }
  }
],
```


```json
"oneOf": [

  {
    "properties": {
      "type": { "const": "icmp" },
      "hosts": {"$ref": "#/definitions/hosts"},
      "wait": {"$ref": "#/definitions/wait"}
    }
  },
  {
    "properties": {
      "type": { "const": "tcp" },
      "hosts": {"$ref": "#/definitions/hosts"}
    }
  },
  {
    "properties": {
      "type": { "const": "http" },
      "urls": {"$ref": "#/definitions/urls"}
    }
  }
],
```

[URL Validation / Format](https://github.com/json-schema-org/json-schema-spec/issues/233#issuecomment-279180514)

```json
{
    "type": "string",
    "format": "uri",
    "pattern": "^(https?|wss?|ftp)://"
}
```


[JsonSchema - Array](https://cswr.github.io/JsonSchema/spec/arrays/)

```json
{
    "type": "array",
    "items": {
        "type": "string"
    }
}
```


[JsonSchema - String](https://json-schema.org/understanding-json-schema/reference/string.html)

```json
{ "type": "string" }
```


[Using RegEx in JSON Schema](https://stackoverflow.com/q/16491973/1366033)

```json
"phone": {
    "type": "string",
    "pattern": "^(\\([0-9]{3}\\))?[0-9]{3}-[0-9]{4}$"
}
```


[Annotate Enum Values with description](https://github.com/json-schema-org/json-schema-spec/issues/57#issuecomment-247861695)

Instead of:

```js
"enum": ["foo", "bar", "whatever"]
```

Do This:

```js
"oneOf": [
    {"const": "foo", "title": "Pick Foo"},
    {"const": "bar", "title": "Pick Bar"},
    {"const": "whatever", "title": "Don't Care"}
]
```

[Make sure item property in array is unique in Json Schema?](https://stackoverflow.com/q/24763759/1366033)

> Nope
