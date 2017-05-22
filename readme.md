# List of content

1. [Installation](#1-installation)
2. [Running](#2-running)
2.1. [Run server without docker](#21-run-server-without-docker)
2.2. [Running usind Docker](#22-running-usind-docker)
3. [Survey providers](#3-survey-providers)
3.1. [Predefined survey types](#31-predefined-survey-types)
3.2. [CSV provider](#32-csv-provider)
3.3. [JSON provider](#33-json-provider)
4. [RestAPI documentation](#4-restapi-documentation)

# 1. Installation

**Prerequisites**

1. NodeJs
2. NPM
   Node Package Manager - manages node dependencies.
3. Bower
   Package manager for frontend dependencies.
4. MySQL
   Default database engine.
5. Make
   Optional but very useful to quick run commands specified in Makefile - especially in developement time.

**Installation**

```bash
# Backend dependencies
cd app
npm install
# Frontend dependencies
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

In production environment it is recommended to use 'forever' to run application.

Forever is installed using npm, to do so, type in terminal:

```bash
npm install forever -g
```

**Example**

```bash
PORT=3001 \
SURVEY_PROVIDER=csv \
SURVEY_SRC=$(pwd)/app/data/test_survey.csv \
DB_PROVIDER=mysql \
DB_HOST=localhost \
DB_USER=docker \
DB_PASS=docker \
forever start -c ./app/bin/www
```

## 2.2. Running usind Docker

**Prerequisites**

1. Docker
2. Docker compose

**Run dev server**

```bash
docker-compose up -d
# or using Makefile
make up
```

# 3. Survey providers

## 3.1. Predefined statement types

Statement types determines how statement should be rendered, and its limitations.

 - Type id: **1** - Short answer with 3 options: Yes, No and I dont know.
   For this type we can reply with value 0 (for "no"), 1 (for "yes") or 2 (for "i don't know").
 - Type id: **2** - Percentage answer from 0 to 100 only integer allowed.

## 3.2. CSV provider

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

## 3.3. JSON provider

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

# 4. RestAPI documentation

## Get active survey
    GET /api/v1/survey

 + Response 200

## Post answers to active survey
    POST /api/v1/survey/reply

 + Response 200
 + Body

```
{
    data: [
        {
            statementId: 1,
            value: 1
        },
        ...
    ]
}
```

## Errors

```json
{
    "success": false,
    "code": 500,
    "message": "Inetrnal error"
}
```
