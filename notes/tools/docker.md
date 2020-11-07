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

[`docker build`](https://docs.docker.com/engine/reference/commandline/build/)

```bash
docker build .
```

* `--tag|-t` - Name and optionally a tag in the `name:tag` format
* `--help` - get help with CLI options


### Run

[`docker run`](https://docs.docker.com/engine/reference/run/)

```bash
docker run -d -p 80:80 docker-tutorial docker101tutorial
```

* `-d` - detached mode (in the background)
* `p 80:80` - map port 80 of the host to port 80 in the container
* `docker/getting-started` - the image to use

```bash
docker run -dt -P --name "webanalyzer-dev" -e "DEBUG=*" -e "NODE_ENV=development" --label "com.microsoft.created-by=visual-studio-code" -p "9229:9229" "webanalyzer:latest" nest start --debug 0.0.0.0:9229
```

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

* `FROM` - grab image from registry
* `WORKDIR` - set working directory (cwd) - all subsequent commands will use that directory
* `ENV` - set environment variable
* `COPY` - copy from current directory in docker container
  * excludes files in `.dockerignore`
* `RUN` - runs the shell commands in the docker container
* `EXPOSE` -


## Docker Compose

[Docker Compose API](https://docs.docker.com/compose/)


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


### Container > Node

* [Build and run a Node.js app in a container](https://code.visualstudio.com/docs/containers/quickstart-node)




## Questions

* [I lose my data when the container exits](https://stackoverflow.com/q/19585028/1366033)


* [Docker Compose vs. Dockerfile](https://stackoverflow.com/q/29480099/1366033)

  * **Dockerfile** - a simple text file that contains the commands a user could call to assemble an image.
  * **DockerCompose** - a tool for defining and running multi-container Docker applications.

