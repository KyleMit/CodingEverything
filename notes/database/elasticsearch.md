# Elasticsearch

<https://www.elastic.co/elasticsearch/>

Elasticsearch is a distributed, RESTful search and analytics engine


## Docs

* [Elasticsearch Guide [7.17]](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/index.html)

## Links

* [Elasticsearch as a NoSQL Database](https://www.elastic.co/blog/found-elasticsearch-as-nosql)

* Pros
  * write-once-read-many-workloads


## GUI

* [Kibana](https://www.elastic.co/kibana/)
* [Grafana](https://grafana.com/)
* [Elasticvue](https://elasticvue.com/)
* IntelliJ Plugins
  * [Elasticsearch Query - EDQL](https://plugins.jetbrains.com/plugin/16364-elasticsearch-query--edql)
  * [IntelliJ Elasticsearch](https://plugins.jetbrains.com/plugin/14512-elasticsearch)
    * [IntelliJ Elasticsearch](https://www.intellij-elasticsearch.com/)
    * [IntelliJ Elasticsearch Demo](https://www.youtube.com/watch?v=lSsnPGMG830)

## Validate

[Validate API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-validate.html)

## Profile

[Profile API](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-profile.html)


## Analyzers

* [Language analyzers > English](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-lang-analyzer.html#english-analyzer)


## Query String DSL

* [Query string query](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html)

## Text Analysis

* [N-gram tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-ngram-tokenizer.html)
  * [Bigram](https://en.wikipedia.org/wiki/Bigram)
    * A `bigram` is an `n-gram` for `n=2`.
* [Edge n-gram tokenizer](https://www.elastic.co/guide/en/elasticsearch/reference/current/analysis-edgengram-tokenizer.html)

## Stemming

ex:

* "singing"
* "sings"
* "sing"

## Stop Words

ex: "The" in "Pass the butter"

## Query Terms

* [Fuzzy query](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/query-dsl-fuzzy-query.html)
  * Measured by [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance)

## Cat API

[cat APIs](https://www.elastic.co/guide/en/elasticsearch/reference/6.8/cat.html)

* `/_cat`
* `?v` = verbose
* `?help` = help
* `?format=json&pretty`
