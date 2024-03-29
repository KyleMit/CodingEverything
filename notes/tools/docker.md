---
templateEngineOverride : md
---

# Docker

[Docker Desktop for Mac and Windows | Docker](https://www.docker.com/products/docker-desktop)


## Getting Started

```bash
# clone
docker run --name repo alpine/git clone \
    https://github.com/docker/getting-started.git
docker cp repo:/git/getting-started/ .

# build
cd getting-started
docker build -t docker101tutorial .

# run
docker run -d -p 80:80 \
    --name docker-tutorial docker101tutorial

# push to docker hub
docker tag docker101tutorial kylemit/docker101tutorial
docker push kylemit/docker101tutorial
```

## Docs

* [`docker image ls`](https://docs.docker.com/engine/reference/commandline/image_ls/)

## CLI Commands

### Build

> When you issue a docker build command, the current working directory is called the build context.

[`docker build`](https://docs.docker.com/engine/reference/commandline/build/)

```bash
docker build .
```

* `--tag|-t` - Name and optionally a tag in the `name:tag` format
* `--help` - get help with CLI options


### Run

[`docker run`](https://docs.docker.com/engine/reference/run/)

#### Examples

```bash
docker run \
  -d \
  -p 80:80 \
  docker-tutorial docker101tutorial

docker run \
  --rm \
  -it \
  -p 3000:3000/tcp \
  dockernodesample:latest

docker run \
  -dt \
  -P \
  --name "webanalyzer-dev" \
  -e "DEBUG=*" \
  -e "NODE_ENV=development" \
  --label "com.microsoft.created-by=visual-studio-code"\
  -p "9229:9229" \
  "webanalyzer:latest" \
  nest start --debug 0.0.0.0:9229
```

### Options

* `-d` - detached mode (in the background)
* `p 8080:80` - map port 8080 of the host to port 80 in the container
* `docker/getting-started` - the image to use


### Images

Show local images

```bash
docker images
```

### Processes

Show processes

```bash
docker ps -a
```

* `--a|-a` - show all (including stopped containers)

### Push

[`docker push`](https://docs.docker.com/engine/reference/commandline/push/)





## Docker File

[Docker File API](https://docs.docker.com/engine/reference/builder/)
[Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)


> List of commands that get sent to the docker engine


### Syntax

```docker
# Comment
INSTRUCTION arguments
```

* Start with base image
  * Well tested starters
  * Node application - use node (from docker hub)
    * `<name>:<tag>`
* run instructions one-by-one, committing the result of each instruction to a new image if necessary
* comments and leading white space removed
* instructions *not* case sensitive, but *should* be uppercased

### Parser Directives / Comments

* **escape** - default is `\` - useful on windows to replace with `\`` where backslash is also a directory path separator (ala Windows Powershell)

```bash
# escape=` (backtick)
```


### Instructions

> Each instruction creates one layer

* `FROM` - initializes a new build stage and sets the **Base Image**
* `WORKDIR` - sets the working directory for any `RUN`, `CMD`, `ENTRYPOINT`, `COPY` and `ADD` instructions that follow it
*
* set working directory (cwd) - all subsequent commands will use that directory
* `ENV` - sets the environment variable `<key>` to the value `<value>`
  * **Syntax** `ENV <key>=<value> ...`
* `COPY` - copy from current directory in docker container
  * excludes files in `.dockerignore`
* `RUN` - runs the shell commands in the docker container
* `EXPOSE` - container listens on the specified network ports at runtime
* `ADD` - copy from current directory in docker container (allows for URLs)
* `LABEL` - adds metadata to an image
* `USER` - sets the *user name (or `UID`) to use when running the image and for any `RUN`, `CMD` and `ENTRYPOINT` instructions
* `VOLUME` - creates a mount point with the specified name
* `STOPSIGNAL` - sets the system call signal that will be sent to the container to exit
* `ONBUILD`
* `CMD` - provides defaults for an executing container
  * **Syntax**: `CMD ["executable", "param1", "param2"…]`
* `ENTRYPOINT`

## Docker Compose

[Docker Compose API](https://docs.docker.com/compose/)

## Docker Network

* [Networking overview](https://docs.docker.com/network/)

## Docker Hub Images

* [Docker Hub > node](https://hub.docker.com/_/node)
  * [`node:14-slim`](https://github.com/nodejs/docker-node/blob/master/14/stretch-slim/Dockerfile)


## Debug

[Debug an app running in a Docker container](https://code.visualstudio.com/docs/containers/debug-common)


## Creating Containers

[Containers From Scratch - Liz Rice](https://www.youtube.com/watch?v=8fi7uSYlOdc) - [@lizrice](https://twitter.com/lizrice)


## VS Code

* [Container tools extension for Visual Studio Code](https://code.visualstudio.com/docs/containers/overview)
* [Debug an app running in a Docker container](https://code.visualstudio.com/docs/containers/debug-common)
* [Reference for Visual Studio Code Docker extension properties and tasks.](https://code.visualstudio.com/docs/containers/reference)

* Command Palette
  * `Docker: Add Docker Files to Workspace...`
  * `Docker: Initialize for Docker debugging`
* Creates `docker-build` and `docker-run` tasks in `tasks.json`

* `launch.json`
* `tasks.json`
* `docker-compose.debug.yml`
* `dockerfile`
* `package.json`
* `index.js`

### Extensions

[Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
[Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
[Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)

### Docker Run Tasks

[Code Docker extension properties and tasks](https://code.visualstudio.com/docs/containers/reference#_docker-run-task)



### Container > Node

* [Build and run a Node.js app in a container](https://code.visualstudio.com/docs/containers/quickstart-node)

#### Example

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build Node Image",
      "type": "docker-build",
      "platform": "node"
    }
  ]
}
```

#### Infers

* `dockerBuild.context` - directory of `package.json`
* `dockerBuild.dockerfile` - directory of `package.json`
* `dockerBuild.tag` - name of `package.json` or parent folder name

## Tips

* [Best practices for writing Dockerfiles](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
* [Use multi-stage builds](https://docs.docker.com/develop/develop-images/multistage-build/)

* If your build contains several layers, you can order them from the less frequently changed (to ensure the build cache is reusable) to the more frequently changed:
  * Install tools you need to build your application
  * Install or update library dependencies
  * Generate your application

* Always combine `RUN` `apt-get update` with `apt-get install` in the same `RUN` statement


## Questions

* [I lose my data when the container exits](https://stackoverflow.com/q/19585028/1366033)


* [Docker Compose vs. Dockerfile](https://stackoverflow.com/q/29480099/1366033)

  * **Dockerfile** - a simple text file that contains the commands a user could call to assemble an image.
  * **DockerCompose** - a tool for defining and running multi-container Docker applications.

* [Shortening output of `docker ps`](https://stackoverflow.com/a/64732713/1366033)


  ```json file=<user>/.docker/config.json
  {
      "psFormat": "table {{.Image}}\t{{.Names}}\t{{.Ports}}\t{{.Status}}",
  }
  ```

* [What is the difference between the `COPY` and `ADD`](https://stackoverflow.com/q/24958140/1366033)

  * `ADD` is the same as `COPY`, but also handles tars and remote URLs
  * [**TIP**](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#add-or-copy): use `COPY` where the magic of `ADD` is not required

* [What is the difference between CMD and ENTRYPOINT in a Dockerfile](https://stackoverflow.com/q/21553353/1366033)

  * The `ENTRYPOINT` specifies a command that will always be executed when the container starts.dd
  * The `CMD` specifies arguments that will be fed to the `ENTRYPOINT`.

  * If you want to make an image for general purpose, you can leave ENTRYPOINT unspecified and use `CMD ["/path/dedicated_command"]` as you will be able to override the setting by supplying arguments to `docker run`.

* [Stopping Docker containers by image name](https://stackoverflow.com/q/32073971/1366033)

  ```bash
  docker stop $(docker ps -q --filter ancestor=<image-name> )
  ```

* [accessing a docker container from another container](https://stackoverflow.com/q/42385977/1366033)



* [Docker-Compose: how to wait for other service to be ready?](https://stackoverflow.com/a/64921431/1366033)

  ```yml
  version: "2"
  services:
    web:
      build: .
      ports:
        - "80:8000"
      depends_on:
        - "db"
      command: ["./wait-for-it.sh", "db:5432", "--", "python", "app.py"]
    db:
      image: postgres
  ```

* [How to start the docker daemon?](https://stackoverflow.com/q/44169435/1366033)

  ```ps1
  Start-Process "C:\Program Files\Docker\Docker\Docker Desktop.exe"
  ```

* [How to check if Docker is running on Windows?](https://stackoverflow.com/a/75405162/1366033)

  ```ps1
  $dockerIsRunning = (docker ps 2>&1 | Out-String) -match "^(?!error)"
  $dockerIsNotRunning = (docker ps 2>&1 | Out-String) -match "^error"
  ```

  ```ps1
  docker ps
  Get-Process 'com.docker.proxy'
  Get-Process "*docker desktop*"
  ```

