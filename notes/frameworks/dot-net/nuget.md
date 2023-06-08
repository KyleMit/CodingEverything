# Nuget

## Questions

* [How to install Nuget package using windows command line in C# project?](https://stackoverflow.com/q/59375668/1366033)

  Use [`dotnet add package`](https://learn.microsoft.com/en-us/nuget/consume-packages/install-use-packages-dotnet-cli#install-or-update-a-package)

  ```bash
  dotnet add package Newtonsoft.Json
  ```

  Use [`Install-Package`](https://learn.microsoft.com/en-us/nuget/reference/ps-reference/ps-ref-install-package)

  ```bash
  Install-Package Newtonsoft.Json
  ```

* [Could not find any project in `C:\**." when running "dotnet add package](https://stackoverflow.com/q/56062228/1366033)

  `cd` into the directory with your project, then run:

  ```bash
  dotnet add package <package>
  ```

  or add `project` param like this

  ```bash
  dotnet add <project> package <package>
  ```

