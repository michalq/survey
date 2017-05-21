# List of content

1. [Installation](#1-installation)
2. [Running](#2-running)
2.1. [Run server without docker](#21-run-server-without-docker)
2.2. [Running usind Docker](#22-running-usind-docker)
3. [System information](#3-system-information)
3.1. [Backend](#31-backend)
3.2. [Frontend](#32-frontend)
4. [Survey providers](#4-survey-providers)
4.1. [CSV provider](#41-csv-provider)
4.2. [JSON provider](#42-json-provider)
5. [RestAPI documentation](#5-restapi-documentation)

# 1. Installation

**Dependencies in back-end app.**

1. NodeJs
2. MySQL
3. NPM

**Other dependencies**
```
cd app
npm install
```

**Dependencies in front-end app.**

```
cd public
bower install
```

# 2. Running

If you run in development environment it is best and easiest to use docker and docker-compose.
Everything is set up and and ready to develop. If you want use docker, jump directly to [Running usind Docker](#22-running-usind-docker).

**System environment**

- PORT - [optional, default: 3000] - server port,
- SURVEY_PROVIDER - [mandatory] - survey provider (available options: csv, json),
- SURVEY_SRC - [mandatory] - survey source file (in case when SURVEY_PROVIDER=csv or json),
- DB_PROVIDER - [mandatory] - database provider (available options: mysql),
- DB_HOST - [mandatory] - database host
- DB_USER - [mandatory] - database user
- DB_PASS - [mandatory] - database password

## 2.1. Run server without docker

You can run server daemonized using forever for example.

Forever is installed using npm, to do so, type in terminal:

```bash
npm install forever -g
```

**Example**

```bash
PORT=3001 \
SURVEY_PROVIDER=json \
SURVEY_SRC=$(pwd)/app/data/test_survey.json \
DB_PROVIDER=mysql \
DB_HOST=localhost \
DB_USER=docker \
DB_PASS=docker \
forever start -c ./app/bin/www
```

... or you can run directly ...

```bash
PORT=3001 \
SURVEY_PROVIDER=json \
SURVEY_SRC=$(pwd)/app/data/test_survey.json \
DB_PROVIDER=mysql \
DB_HOST=localhost \
DB_USER=docker \
DB_PASS=docker \
./app/bin/www
```

## 2.2. Running usind Docker

**Dependencies**

1. Docker
2. Docker compose

**Run dev server**

```bash
docker-compose up -d
```

# 3. System information

## 3.1. Backend

Core is written in NodeJS. And application database in Sqlite3.
Why Sqlite3?
It is easier to develop so small project and is free. The most popular and free databases like MySQL and PostgreSql fit to this project as well, but in stage of developement it is easier to use file based database.

## 3.2. Frontend

**Main dependencies**

1. ReactJS
2. Bootstrap4

# 4. Survey providers

## 4.1. CSV provider

**Schema**

1. 1st line - survey id. To identify responses.
2. 2nd, 3rd line - respectively survey title and survey description. That is what is displayed on landing page.
4. 4th to nth lines - consist with survey statements.
5. One survey statement consist of respectively identifier, type and title.

**Example**

```
1
Test survey.
This is description.
1,1,Do you have dog?
2,1,Another short question?
3,2,This is actually question with range values from 0 to 100%.
```

## 4.2. JSON provider

Json provider provide very readable schema, that looks as follow:

```
{
    "id": 1,
    "title": "Test survey.",
    "description": "This is description.",
    "statements": [
        {
            "id": 1,
            "statement": "Do you have dog?",
            "type": 1
        },
        {
            "id": 2,
            "statement": "Another short question?",
            "type": 1
        },
        {
            "id": 3,
            "statement": "This is actually question with range values from 0 to 100%",
            "type": 2
        }
    ]
}
```

# 5. RestAPI documentation

## Get active survey
    GET /api/v1/survey

 + Response 200

## Post answers to active survey
    POST /api/v1/survey/reply

 + Response 200
 + Body
    {
        data: [
            {
                statementId: 1,
                value: 1
            },
            ...
        ]
    }


## Errors

```json
{
    "success": false,
    "code": 500,
    "message": "Inetrnal error"
}
```
