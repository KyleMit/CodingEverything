# Excel


* [Extract First *n* fields in Excel](https://www.exceltip.com/excel-text-formulas/extracting-the-first-n-number-of-words-from-a-string.html)

```vb
=TRIM(LEFT(A2,FIND("^",SUBSTITUTE(TRIM(A2)&" "," ","^",3))-1))
```
