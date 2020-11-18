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

### CLI

* [redis-cli | Docs](https://redis.io/topics/rediscli)
* [redis-cli | npm](https://www.npmjs.com/package/redis-cli)

```bash
npm i -g redis-cli
```



## AWS

https://aws.amazon.com/elasticache/pricing/

