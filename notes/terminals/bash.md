# Bash

* Bash - Bourne Again SHell

## Commands

### Xargs

[**`xargs`**](https://en.wikipedia.org/wiki/Xargs)

Some commands such as `grep` and `awk` can take input either as command-line arguments or from the standard input.
However, others such as `cp` and `echo` can only take input as arguments, which is why `xargs` is necessary.

## Questions

* [Create .zip folder from the command line](https://superuser.com/q/201371/180163)

    ```bash
    alias zip="tar.exe"
    ```

* [“Permission Denied” trying to run Python on Windows 10](https://stackoverflow.com/a/64960283/1366033)

    ```bash
    function python { cmd.exe /c "python $1 $2 $3";}
    ```

* [How to mkdir only if a directory does not already exist?](https://stackoverflow.com/q/793858/1366033)

    ```bash
    mkdir -p foo
    ```

* [How to remove all files from a directory?](https://askubuntu.com/questions/60228/how-to-remove-all-files-from-a-directory)

    ```bash
    rm -r /path/to/directory/*
    ```

* [Run ./script.sh vs bash script.sh - permission denied](https://unix.stackexchange.com/q/203371/128893)

    ```bash
    chmod +rx script.sh
    ./script.sh
    ```

* [Delete all files with a particular extension in a particular folder?](https://unix.stackexchange.com/q/42020/128893)

    ```bash
    rm /some/dir/*.xvg
    ```

* [Execute command on all files in a directory](https://stackoverflow.com/q/10523415/1366033)

    ```bash
    # one liner
    for i in src/*; do echo "$i"; done

    # formatted
    for file in src/*
    do
        echo $file
    done

    #xargs
    find . | xargs echo
    ```

* [`ls` vs `find` vs glob](https://stackoverflow.com/q/13830036/1366033)

  find is recursive by default; ls isn't.  use glob for everything else
