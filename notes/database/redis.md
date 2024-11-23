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

## Tutorials

* [Redis Wiki](https://onecompiler.com/redis/wiki)
* [Redis Commands Cheat sheet](https://redis.io/learn/howtos/quick-start/cheat-sheet)
* [Redis Commands 101: From Basics to Mastery](https://hackthedeveloper.com/redis-commands/)

## Fiddle / Playground

* [Sorted Set](https://onecompiler.com/redis/42vv5h7qp)
* [Hashset Leaderboard](https://onecompiler.com/redis/42vv5yd84)
* [Get Set Dict](https://onecompiler.com/redis/42vvg3cve)

## Commands

* [SET](https://redis.io/docs/latest/commands/set/)

## Tools

* [RedisInsight/RedisInsight: Redis GUI by Redis](https://github.com/redisinsight/redisinsight/)
  * [Redis Insight](https://redis.io/insight/)
* [Redis for VS Code - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Redis.redis-for-vscode)

## Dotnet

* [C#/.NET guide](https://redis.io/docs/latest/develop/connect/clients/dotnet/)
* [redis/NRedisStack: Redis Stack .Net client](https://github.com/redis/NRedisStack)

## CLI

* [redis-cli](https://redis.io/topics/rediscli)
* [redis-cli](https://www.npmjs.com/package/redis-cli)

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


## Sorted Sets

* [Redis sorted sets](https://redis.io/docs/latest/develop/data-types/sorted-sets/)
* [Redis Sorted Sets - Redis](https://redis.io/glossary/redis-sorted-sets/)

* Commands
  * [`ZADD`](https://redis.io/docs/latest/commands/zadd/)
  * [`ZCARD`](https://redis.io/docs/latest/commands/zcard/)
  * [`ZCOUNT`](https://redis.io/docs/latest/commands/zcount/)
  * [`ZRANGE`](https://redis.io/docs/latest/commands/zrange/)
  * [`ZRANK`](https://redis.io/docs/latest/commands/zrank/)
  * [`ZREVRANGE`](https://redis.io/docs/latest/commands/zrevrange/)
  * [`ZSCAN`](https://redis.io/docs/latest/commands/zscan/)
  * [`ZSCORE`](https://redis.io/docs/latest/commands/zscore/)

## Naming Conventions

* [Redis Namespace and Other Keys to Developing with Redis | Redis](https://redis.io/blog/5-key-takeaways-for-developing-with-redis/#:~:text=Using%20a%20proper%20naming%20methodology,a%20Redis%20namespace%20best%20practice.)
* [Redis key naming conventions? - Stack Overflow](https://stackoverflow.com/questions/6965451/redis-key-naming-conventions)
* [Naming Convention and Valid Characters for a Redis Key - Stack Overflow](https://stackoverflow.com/questions/30271808/naming-convention-and-valid-characters-for-a-redis-key?noredirect=1)
* [Namespaces in Redis? - Stack Overflow](https://stackoverflow.com/questions/8614858/namespaces-in-redis)

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

