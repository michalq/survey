# Installation

## Dependencies in back-end app
```
npm install
```

## Dependencies in front-end app
```
cd public
bower install
```

## Database
If you want to use sqlite you have to create empty file like this
```
mkdir ~/db && touch ~/db/surveyDb.sqlite
```
you have to provide path to this file while running application (see section below).

# Running

Before running you must provide some environment variables.

- PORT - [optional, default: 3000] - server port,
- SURVEY_PROVIDER - [mandatory] - survey provider (available options: csv),
- SURVEY_SRC - [mandatory] - survey source file (in case when SURVEY_PROVIDER=csv),
- DB_PROVIDER - [mandatory] - database provider (available options: sqlite3),
- DB_HOST - [mandatory] - database host (in case of sqlite3 it is file path to database file or just :memory: if you want keep yur data in memory but it is not recommended option to keep database in memory).

## Run server

```
PORT=3001 \
SURVEY_PROVIDER=json \
SURVEY_SRC=~/repo/survey/data/test_survey.json \
DB_PROVIDER=sqlite3
DB_HOST=~/db/surveyDb.sqlite
./app/bin/www
```
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

## Api v1 mini doc

### Get active survey
GET /api/v1/survey

### Post answers to active survey
POST /api/v1/survey/:id/reply