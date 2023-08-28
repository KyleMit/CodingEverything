# JSON in .NET

## Options

* [System.Text.Json Namespace | Microsoft Learn](https://learn.microsoft.com/en-us/dotnet/api/system.text.json?view=net-7.0)
* [Json.NET - Newtonsoft](https://www.newtonsoft.com/json)
* [kevin-montrose/Jil: Fast .NET JSON (De)Serializer, Built On Sigil](https://github.com/kevin-montrose/Jil)


## Newtonsoft Questions

* [How do I get formatted and indented JSON in .NET using C#?](https://stackoverflow.com/q/7947005/1366033)

  Use [`Formatting.Indented`](https://www.newtonsoft.com/json/help/html/T_Newtonsoft_Json_Formatting.htm)

  ```cs
  var serializer = new JsonSerializerSettings()
  {
      Formatting = Formatting.Indented,
  };
  ```


* [How to ignore a property in class if null, using json.net](https://stackoverflow.com/q/6507889/1366033)

  ```cs
  var serializer = new JsonSerializerSettings()
  {
      NullValueHandling = NullValueHandling.Ignore,
  };
  ```

* [JavaScriptSerializer - JSON serialization of enum as string](https://stackoverflow.com/q/2441290/1366033)

  ```cs
  var serializer = new JsonSerializerSettings()
  {
      Converters = new List<JsonConverter>()
      {
          new Newtonsoft.Json.Converters.StringEnumConverter(),
      },
  };
  ```

