# ProtoBuf

> protobuf-net is a contract based serializer for .NET code, that happens to write data in the "protocol buffers" serialization format engineered by Google.

<https://github.com/protobuf-net/protobuf-net>

## Examples

### 1. Decorate Classes

```cs
[ProtoContract]
class Address {
    [ProtoMember(1)]
    public string Line1 {get;set;}
    [ProtoMember(2)]
    public string Line2 {get;set;}
}
```

> Note that unlike XmlSerializer, the member-names are not encoded in the data - instead, you must pick an integer to identify each member. Additionally, to show intent it is necessary to show that we intend this type to be serialized (i.e. that it is a data contract).

### 2. Serialize Data

```cs
var person = new Person {
    Id = 12345, Name = "Fred",
    Address = new Address {
        Line1 = "Flat 1",
        Line2 = "The Meadows"
    }
};
using (var file = File.Create("person.bin")) {
    Serializer.Serialize(file, person);
}
```


### 3. Deserialize your data

```cs
Person newPerson;
using (var file = File.OpenRead("person.bin")) {
    newPerson = Serializer.Deserialize<Person>(file);
}
```
