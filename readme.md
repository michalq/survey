# Installation

npm install

# Running

Before running you must provide some environment variables.

- PORT - [optional, default: 3000] - server port,
- SURVEY_PROVIDER - [mandatory] - survey provider (available options: csv),
- SURVEY_SRC - [mandatory] - survey source file (in case when SURVEY_PROVIDER=csv),
- DB_PROVIDER - [mandatory] - database provider (available options: sqlite3),
- DB_HOST - [mandatory] - database host (in case of sqlite3 it is file path to database file or just :memory: if you want keep yur data in memory but it is not recommended option to keep database in memory).

# System information

## Backend

Core is written in NodeJS. And application database in Sqlite3.
Why Sqlite3?
It is easier to develop so small project and is free. The most popular and free databases like MySQL and PostgreSql fit to this project as well, but in stage of developement it is easier to use file based database.

## Developing

### Frontent



## Frontend

1. AngularJs
2. Bootstrap