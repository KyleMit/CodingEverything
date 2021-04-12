---
title: Real World Container Deployments Using Linux, Docker and Azure
date: 2017-01-23
---


https://www.meetup.com/VTCode/events/236638290/

[Jobs Channel](https://btvdev.slack.com/messages/jobs/)

[Visual Studio Dev Essentials](https://www.visualstudio.com/dev-essentials/)

by [James Sturtevant](http://www.jamessturtevant.com/)

#### Agenda

* Docker
* Azure App Service (Platform as a Service)
* Azure Web Apps for Linux
* Multi Container Scenarios and Swarm

#### Docker

* Didn't invent containers
* Built ecosystem around container technology
* File format system
  * shareable, and open source
* Like github for containers


##### Containers vs. VMs

![Container vs VM](https://imgur.com/MJHfm1c.jpg)
http://stackoverflow.com/questions/16047306/how-is-docker-different-from-a-normal-virtual-machine
https://www.docker.com/what-docker

VM - host OS + hypervisor + guest os + app
Docker - host OS + docker os + apps

**Docker Containers** - actually running instance of a container (writable)
**Docker Images** - read only (immutable) templates that help define docker container


**`Docker Run`** - Downloads image & creates & starts container

```bash
docker run hello-world
# -it -> interactive (intellitype)
docker run -it ubuntu /bin/bash
# show me all the images
docker images
# show me all the containers
docker ps
```

**Dockerfile** - your "recipe" - a text file where you tell docker what you want in your docker image - takes a snapshot every command, uses cache for performance

**`Docker Build`** - creates docker file

Demo - Spin up 20 Web Servers - *faster than you can count to 30*

```bash
for i in {1..20}; do docker run -d -[ 80 tutum/hello-world; done;

#spin down all running containers
docker stop $(docker ps -1)
```

MVC App - Build into docker file
Docker file -> Docker Image/Container
Docker container -> deploy to docker server

#### Azure App Service

* The fast experience for building web & mobile apps
* Integration with any data on-premise and in the cloud
* A fully managed DevOps platform, with enterprise security and scalability


**Azure Compute Continuum**

From Most Flexibility to Least:

* VMs / VM Scale Sets
* VM Extensions
* Service Fabric / Batch
* Web Apps / App Service

**Integrated Offering**

* Web Apps - Web apps that scale with your business
* Mobile Apps
* Logic Apps
* API Apps
* Functions


#### Why Linux?

* 1 in 3 VMs are Linux VMs
* #1 Ask on User Voice (run web apps on linux)
* New Programming Scenarios
  * Ruby on Rails, Python
* Circumvents Support for Windows for up and coming frameworks
  * Future proof node.js workarounds
* Tooling and support in your environment
* Docker enables simple application portability
  * Deploy to Azure, AWS, Google Compute
    * Redundancy across geography / data-centers + redundancy across clouds
* Docker is also very popular for micro-service developers
* Serverless computation


Multi Server Scaling - "Become cattle instead of pets"

[Are your servers PETS or CATTLE](http://www.theregister.co.uk/2013/03/18/servers_pets_or_cattle_cern/)

> * **Pets**
 *pets are given names like pussinboots.cern.ch

* They are unique, lovingly hand raised and cared for
* When they get ill, you nurse them back to health

* **Cattle**
  * Cattle are given numbers like vm0042.cern.vh
  * They are almost identical to other cattle
  * When they get ill, you get another one

> Future applications architectures should use cattle, but pets with strong configuration management are viable and still needed

