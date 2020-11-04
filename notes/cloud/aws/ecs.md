# ECS

> Fully managed container orchestration service

## Docs

* [Using the Amazon ECS Command Line Interface](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI.html)
* [Installing the Amazon ECS CLI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_CLI_installation.html)
* [ecs-cli logs](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cmd-ecs-cli-logs.html)

## ECS-CLI

### Installation

1. Install On  Powershell

    ```ps
    New-Item -Path 'C:\Program Files\Amazon\ECSCLI' -ItemType Directory
    Invoke-WebRequest -OutFile 'C:\Program Files\Amazon\ECSCLI\ecs-cli.exe' https://amazon-ecs-cli.s3.amazonaws.com/ecs-cli-windows-amd64-latest.exe
    ```

2. Install [GnuPG](https://www.gnupg.org/index.html)

    ```bash
    winget install --id=GnuPG.GnuPG -e
    ```

3. Retrieve the Amazon ECS PGP public key

    ```bash
    gpg --keyserver hkp://keys.gnupg.net --recv BCE9D9A42D51784F
    ```

4. Download the Amazon ECS CLI signatures

    ```bash
    gpg --verify ecs-cli.asc 'C:\Program Files\Amazon\ECSCLI\ecs-cli.exe'
    ```


5. Apply execute permissions to the binary.

    ```ps
    setx path "%path%;C:\Program Files\Amazon\ECSCLI"
    ```

6. Verify install

    ```bash
    ecs-cli --version
    ```

### Usage

```bash
ecs-cli logs --task-id
```
