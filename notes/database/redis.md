# Redis

[Redis](https://redis.io/)


## Docs


* [Amazon ElastiCache Pricing](https://aws.amazon.com/elasticache/pricing/)
* [Supported ElastiCache for Redis Versions](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/supported-engine-versions.html#redis-version-6.x)

## Get Started


[Docker Hub](https://hub.docker.com/_/redis/)

```bash
docker pull redis
```

```bash
# create container
docker run --name some-redis -p 6379:6379 -d redis
# rerun container
docker start some-redis
```

## CLI

* [redis-cli | Docs](https://redis.io/topics/rediscli)
* [redis-cli | npm](https://www.npmjs.com/package/redis-cli)

Command Name: `redis-cli` (server) vs. `rdcli` (npm)


```bash
npm i -g redis-cli
```

* [Passing Host, port, password and database](https://redis.io/topics/rediscli#host-port-password-and-database)

    ```bash
    $ redis-cli -h redis15.example.org -p 6390 ping
    PONG
    ```

## Node Clients

* [Node.js with Redis](https://redislabs.com/lp/node-js-redis/)
  * [NodeRedis/**node-redis**](https://github.com/NodeRedis/node-redis)
  * [luin/**ioredis**](https://github.com/luin/ioredis)



## AWS

https://aws.amazon.com/elasticache/pricing/


## Questions

* [How to connect to remote Redis server?](https://stackoverflow.com/q/40678865/1366033)

    ```bash
    redis-cli -h 10.144.62.3 -p 30000
    ```

* [Redis Connection Check](https://stackoverflow.com/a/64934377/1366033)

  ```js
  var client = require('redis').createClient();

  client.on('ready', () => {
      let response = client.ping()
      console.log(response)
      // do other stuff
  });
  ```

