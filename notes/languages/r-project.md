# R

> The R Project for Statistical Computing

## Links

* [R Project](https://www.r-project.org/)
* [Download](https://cloud.r-project.org/)
* [R Source - mirror](https://github.com/wch/r-source)
  * [R Source - SVN](https://svn.r-project.org/R/)
* [RStudio $$$](https://rstudio.com/pricing/)

## Getting Started

CLI: C:\Program Files\R\R-4.0.2\bin\R.exe
GUI: C:\Program Files\R\R-4.0.2\bin\x64\Rgui.exe



## VS Code Extension

[R by @Yuki.Ueda)](https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r)

## Questions

* [Error: '\R' is an unrecognized escape in character string starting "C:\R"](https://stackoverflow.com/q/12695879/1366033)

  > You have to escape the `\` since it is itself an escape character.

  ```r
  read.table('C:\\xxx\\classes\\R_Prog\\data.csv')
  ```


