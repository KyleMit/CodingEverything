# Ruby on Rails

> A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern

\- Created by David Heinemeier Hansson ([@DHH](https://twitter.com/dhh))

[Ruby on Rails](https://rubyonrails.org/)

## Installation

```bash
gem install rails
```

## Articles

* [Rails 5: The Tour - YouTube](https://www.youtube.com/watch?v=OaDhY_y8WTo)

    ```bash
    rails new weblog
    rails generate scaffold post title:string body:text
    rails cat db/migrate/2020000_create_post.rb
    rails db:migrate
    cat db/schema.rb
    rails server
    rails console
    > Post.first
    > Post.all
    > Post.where(created_at: Date.yesterday..Date.tomorrow).to_sql
    > Post.create! title: 'Hello from the console', body: 'Thats good'
    rails generate resource comment post:references body:text
    rails db:migrate
    rails routes
    ```


## Philosophy

* Multi-format - output as html/json/etc
* Convention over configuration
