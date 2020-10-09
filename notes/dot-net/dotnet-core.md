# dotnet core

## Read Excel File

### Solutions

* **General**
  * [.net - Reading Excel files from C# - Stack Overflow](https://stackoverflow.com/questions/15828/reading-excel-files-from-c-sharp)
  * [c# - Read an excel file on asp.net core 1.0 - Stack Overflow](https://stackoverflow.com/questions/40557935/read-an-excel-file-on-asp-net-core-1-0)
  * [entity framework - Upload and read excel file using .NET core MVC - Stack Overflow](https://stackoverflow.com/questions/55176996/upload-and-read-excel-file-using-net-core-mvc)
  * [uploading and reading from an excel file in asp.net core 2 - Stack Overflow](https://stackoverflow.com/questions/49658913/uploading-and-reading-from-an-excel-file-in-asp-net-core-2)
  * [c# - Is there any .NET Core compatible library for reading excel spreadsheet file? - Stack Overflow](https://stackoverflow.com/questions/34884117/is-there-any-net-core-compatible-library-for-reading-excel-spreadsheet-file)\
* **EPPlus**
  * [c# - EPPlus - Read Excel Table - Stack Overflow](https://stackoverflow.com/questions/36637882/epplus-read-excel-table)
  * [c# - How to parse excel rows back to types using EPPlus - Stack Overflow](https://stackoverflow.com/questions/33436525/how-to-parse-excel-rows-back-to-types-using-epplus)

### Libraries

* [TonyQus/npoi](https://github.com/tonyqus/npoi)
  * [NPOI](https://github.com/dotnetcore/NPOI)
  * [ExcelMapper](https://github.com/mganss/ExcelMapper)
  * [Npoi.Mapper](https://github.com/donnytian/Npoi.Mapper)
* [EPPlus](https://github.com/EPPlusSoftware/EPPlus)
  * [JanKallman/EPPlus](https://github.com/JanKallman/EPPlus)
* [ExcelDataReader](https://github.com/ExcelDataReader/ExcelDataReader)
* [DocumentFormat.OpenXml](https://github.com/OfficeDev/Open-XML-SDK)
* [`OleDbDataAdapter`](https://docs.microsoft.com/en-us/dotnet/api/system.data.oledb.oledbdataadapter) + [OLE DB Provider for Microsoft Jet](https://docs.microsoft.com/en-us/sql/ado/guide/appendixes/microsoft-ole-db-provider-for-microsoft-jet)
* [Syncfusion - Excel Framework](https://www.syncfusion.com/excel-framework/net)

### Excel Data Reader

```cs
List<UserModel> users = new List<UserModel>();
var fileName = "./Users.xlsx";
// For .net core, the next line requires the NuGet package,
// System.Text.Encoding.CodePages
System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
{
    using (var reader = ExcelReaderFactory.CreateReader(stream))
    {
        while (reader.Read()) //Each row of the file
        {
            users.Add(new UserModel
            {
                Name = reader.GetValue(0).ToString(),
                Email = reader.GetValue(1).ToString(),
                Phone = reader.GetValue(2).ToString()
            });
        }
    }
}
```

### Sample Table


|   Client ID  | First Name | Last Name | Date of Birth | Status |
|:------------:|:----------:|:---------:|:-------------:|:------:|
|       1      | Erica      | Baker     |    1/1/1980   |  Tech  |
|       2      | Annie      | Easley    |   4/23/1933   |  NASA  |
|       3      | Dorothy    | Vaughan   |   9/20/1910   |  NASA  |
|       4      | Katherine  | Johnson   |   8/26/1918   |  NASA  |

### Sample Class

```cs
 class Client
{
    [Column("Client ID")]
    public int ClientID { get; set; }

    [Column("First Name")]
    public string FirstName { get; set; }

    [Column("Last Name")]
    public string LastName { get; set; }

    [Column("Date Of Birth")]
    public DateTime DateOfBirth { get; set; }

    [Column("Status")]
    public string Status { get; set; }
}
```
