# Bash

* Bash - Bourne Again SHell

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

