## Description

This software is to solve the challenge of building an API that returns weather information.
It was built using Node.Js, Nest.JS, Typescript, Swagger and TypeORM.

## Configure to run localy

Run a Postgres database server and create a database called `devices` in it.

Create a `ormconfig.json` in root path like `ormconfig.example.json` example.

## Libs installation

```bash
$ npm install
```

## Run migrations

```bash
$ npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```
