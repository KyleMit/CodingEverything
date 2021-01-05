# C Lang


> C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system.
> By design, C provides constructs that map efficiently to typical machine instructions.

## Acronyms

* **ANSI** - American National Standards Institute


## Links

[C (programming language)](https://en.wikipedia.org/wiki/C_(programming_language))
[C syntax - Wikipedia](https://en.wikipedia.org/wiki/C_syntax)
[C Tutorial](https://www.cprogramming.com/tutorial/c-tutorial.html?inl=nv)

## VSCode

* [C++ programming with Visual Studio Code](https://code.visualstudio.com/docs/languages/cpp)
* [Get Started with C++ and Mingw-w64 in Visual Studio Code](https://code.visualstudio.com/docs/cpp/config-mingw)
* [Configure Visual Studio Code for Microsoft C++](https://code.visualstudio.com/docs/cpp/config-msvc)
* [Debug C++ in Visual Studio Code](https://code.visualstudio.com/docs/cpp/cpp-debug)
* [Edit and navigate C++ code in Visual Studio Code](https://code.visualstudio.com/docs/cpp/cpp-ide)
* [Customize default settings in Visual Studio Code C++ projects](https://code.visualstudio.com/docs/cpp/customize-default-settings-cpp)


### C_CPP_Properties

[c_cpp_properties.json reference](https://code.visualstudio.com/docs/cpp/c-cpp-properties-schema-reference)

```json
"cStandard": "gnu17",
"cppStandard": "c++17",
"intelliSenseMode": "gcc-x64"
```

## MinGW

[MinGW | Minimalist GNU for Windows](http://www.mingw.org/)

* **MinGW** - Minimalist GNU for Windows - minimalist development environment for native Microsoft Windows applications.
* **MSYS** - Minimal SYStem - a Bourne Shell command line interpreter system

[Download MinGW](https://osdn.net/projects/mingw/releases/)

Check install binaries on path

```bash
g++ --version
gdb --version
```

## Intro

```c
// main.c
// Header file for input output functions
#include <stdio.h>

// main function
// where the execution of program begins
int main()
{

    // prints hello world
    printf("Hello World");

    return 0;
}
```

## GCC CLI

* [15 Most Frequently Used GCC Compiler Command Line Options](https://www.thegeekstuff.com/2012/10/gcc-compiler-options/)
* [Invoking GCC (Using the GNU Compiler Collection (GCC))](https://gcc.gnu.org/onlinedocs/gcc/Invoking-GCC.html)

```bash
gcc main.c
gcc main.c -o main
```

## Makefile

> You need a file called a makefile to tell make what to do. Most often, the makefile tells make how to compile and link a program.

### Links

* [GNU Project > Make](https://www.gnu.org/software/make/)
* [GNU Project > Make Manual](https://www.gnu.org/software/make/manual/make.html)
* [Introduction to GNU make](https://www.gnu.org/software/make/manual/html_node/Introduction.html)
* [Makefile - Wikipedia](https://en.wikipedia.org/wiki/Makefile)
* [A Simple Makefile Tutorial](https://www.cs.colby.edu/maxwell/courses/tutorials/maketutor/)

### Install

* [Make - GNU Project - Free Software Foundation](https://www.gnu.org/software/make/)
  * [Chocolatey Software | GNU make 4.3](https://chocolatey.org/packages/make#files)

    ```bash
    choco install make
    ```

* [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm?ref=winstall)
  * [Make for Windows - winstall](https://winstall.app/apps/GnuWin32.Make)

    ```bash
    winget install GnuWin32.Make
    # C:\Program Files (x86)\GnuWin32\bin
    ```

* [xmake-io/xmake at winstall](https://github.com/xmake-io/xmake?ref=winstall)
  * [XMake - winstall](https://winstall.app/apps/Xmake-io.Xmake)

    ```bash
    winget install Xmake-io.Xmake
    ```

### Example

Typical Bash Instruction:

```bash
gcc -o hellomake hellomake.c hellofunc.c -I.
```

Make File

```makefile
hellomake: hellomake.c hellofunc.c
     gcc -o hellomake hellomake.c hellofunc.c -I.
```


### GNU for Windows

* [GnuWin32 Packages](http://gnuwin32.sourceforge.net/packages.html)
  * [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)

## Questions

* [Include file not found in include directory](https://stackoverflow.com/q/39430277/1366033)

  [Visual Studio Code gives me "#include error detected"](https://stackoverflow.com/q/51883754/1366033)

  Command Palette > `c/cpp: Edit Configurations` > `c_cpp_properties.json`

* [How to run a makefile in Windows?](https://stackoverflow.com/q/2532234/1366033)

* [Cygwin unexpected token `(` on cd - Stack Overflow](https://stackoverflow.com/q/15080184/1366033)




