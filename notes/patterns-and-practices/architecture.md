# Architecture


[Performance - Stack Exchange](https://stackexchange.com/performance)


## Stack Overflow Architecture

[Nick Craver - Stack Overflow: The Architecture - 2016 Edition](https://nickcraver.com/blog/2016/02/17/stack-overflow-the-architecture-2016-edition/)

![SO Architectural Diagram](/assets/notes/architecture/SO-Architecture-Overview-Logical.svg)


* DNS (CloudFlare)
  * Edge Nodes
* Load Balancers (HAProxy)
* Web Tier (IIS 8.5, ASP.Net MVC 5.2.3, and .Net 4.6.1)
* Service Tier (IIS, ASP.Net MVC 5.2.3, .Net 4.6.1, and HTTP.SYS)
* Cache & Pub/Sub (Redis)
  * "L1" is HTTP Cache on the web servers or whatever application is in play.
  * "L2" is falling back to Redis and fetching the value out
  * Pub/Sub
* Websockets
* Search (Elasticsearch)
* Databases (SQL Server)
  * Single Source of Truth
  * Asynchronous Replica


## Libraries

* [Cloudflare - The Web Performance & Security Company | Cloudflare](https://www.cloudflare.com/)
* [Railgun™ | Cloudflare](https://www.cloudflare.com/website-optimization/railgun/)
* [Redis](https://redis.io/)
* [Free and Open Search: The Creators of Elasticsearch, ELK & Kibana | Elastic](https://www.elastic.co/)
* [HAProxy - The Reliable, High Performance TCP/HTTP Load Balancer](https://www.haproxy.org/)
* [Protocol Buffers  |  Google Developers](https://developers.google.com/protocol-buffers/)
* [DapperLib/Dapper: Dapper - a simple object mapper for .Net](https://github.com/DapperLib/Dapper)
* [StackExchange/StackExchange.Redis: General purpose redis client](https://github.com/StackExchange/StackExchange.Redis)
* [protobuf-net/protobuf-net: Protocol Buffers library for idiomatic .NET](https://github.com/protobuf-net/protobuf-net)
* [StackExchange/NetGain: A high performance websocket server library powering Stack Overflow.](https://github.com/StackExchange/NetGain)
* [MiniProfiler: A simple but effective mini-profiler for .NET and Ruby](https://miniprofiler.com/)

## Wikipedia

* [Border Gateway Protocol](https://en.wikipedia.org/wiki/Border_Gateway_Protocol)
* [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth)
* [Multiprotocol Label Switching](https://en.wikipedia.org/wiki/Multiprotocol_Label_Switching)
* [CPU cache](https://en.wikipedia.org/wiki/CPU_cache#MULTILEVEL)


## L1/L2 CPU Cache

* [CPU cache](https://en.wikipedia.org/wiki/CPU_cache#MULTILEVEL)
* [L1/L2 Cache](https://www.sciencedirect.com/topics/computer-science/l2-cache)

## Learning Resources

* [Coding Blocks](https://www.codingblocks.net/) – Podcast and Your Source to Learn How To Become a Better Programmer
* [Nick Craver - Software Imagineering](https://nickcraver.com/)
  * [Blog post ideas](https://trello.com/b/0zgQjktX/blog-post-queue-for-stack-overflow-topics)


## Scales

* Messaging Queue
* Service Bus
  * Queue -> Multiple Listeners
  * Topic


### Redis Data Structures: Sorted Sets

[Is there a practical limit to the number of elements in a sorted set in redis? - Stack Overflow](https://stackoverflow.com/q/6076342/1366033)
[Redis - Sorted Sets](https://www.tutorialspoint.com/redis/redis_sorted_sets.htm)
[Redis Sorted Sets Explained. Try to understand Sorted Sets with a… | by Dunith Dhanushka | Analytics Vidhya | Medium](https://medium.com/analytics-vidhya/redis-sorted-sets-explained-2d8b6302525)
[Data types – Redis](https://redis.io/topics/data-types)

## ElasticSearch

[Connect Elasticsearch to SQL Server: 2 Easy Methods](https://hevodata.com/learn/elasticsearch-to-sql-server/)
[Elasticsearch query for SQL users : Part 1 | by Shoeb Hasan | Medium](https://medium.com/@shoeb.hasan/elasticsearch-query-for-sql-users-part-1-ba6c281df337)

## DB Structure For Game

[Database Structure for 2v2 game](https://softwareengineering.stackexchange.com/q/338834)
[Designing a game leaderboard service: Part 1](https://singhnaveen.medium.com/designing-a-game-leaderboard-service-part-1-e1362ac48a35)
[Build a real-time gaming leaderboard with Amazon ElastiCache for Redis](https://aws.amazon.com/blogs/database/building-a-real-time-gaming-leaderboard-with-amazon-elasticache-for-redis/)


## Scalable

[How to Build a Scalable Application up to 1 Million Users on AWS](https://www.simform.com/blog/building-scalable-application-aws-platform/)

* Vertical scaling (Scaling Up)
* Horizontal scaling (Scaling Out)

For database layer through partitioning or sharding
For cache layer- Memcache client-side partitioning that stores a portion of application data in cache and rest is managed by RDBMS(Relational DataBase Management Systems)
For computing layer- Job queues that allow the tasks to be in queues until a bare minimum for execution are met.

Web servers
Database servers
Load balancers
Shared file Servers

