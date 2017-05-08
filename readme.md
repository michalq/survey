# Installation

## Dependencies in back-end app
```
cd app
npm install
```

## Dependencies in front-end app
```
cd public
bower install
```

## Database

PostgreSQL
So docker...

# Running

Before running you must provide some environment variables.

- PORT - [optional, default: 3000] - server port,
- SURVEY_PROVIDER - [mandatory] - survey provider (available options: csv, json),
- SURVEY_SRC - [mandatory] - survey source file (in case when SURVEY_PROVIDER=csv or json),
- DB_PROVIDER - [mandatory] - database provider (available options: postgresql),
- DB_HOST - [mandatory] - database host

## Run server

You can run server daemonized using forever for example.

Forever is installed using npm, to do so, type in terminal:

```bash
npm install forever -g
```

*Example*

```bash
PORT=3001 \
SURVEY_PROVIDER=json \
SURVEY_SRC=$(pwd)/app/data/test_survey.json \
DB_PROVIDER=sqlite3 \
DB_HOST=~/db/surveyDb.sqlite \
forever start -c ./app/bin/www
```

... or you can run directly ...

```bash
PORT=3001 \
SURVEY_PROVIDER=json \
SURVEY_SRC=$(pwd)/app/data/test_survey.json \
DB_PROVIDER=sqlite3 \
DB_HOST=~/db/surveyDb.sqlite \
./app/bin/www
```

# System information

## Backend

Core is written in NodeJS. And application database in Sqlite3.
Why Sqlite3?
It is easier to develop so small project and is free. The most popular and free databases like MySQL and PostgreSql fit to this project as well, but in stage of developement it is easier to use file based database.

## Frontend

### Main dependencies

1. ReactJS
2. Bootstrap4

# Api v1

## Get active survey
    GET /api/v1/survey

 + Response 200

## Post answers to active survey
    POST /api/v1/survey/reply

 + Response 200


## Errors

```json
    {
        "success": false,
        "code": 500,
        "message": "Inetrnal error"
    }
```
