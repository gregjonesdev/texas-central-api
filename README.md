# API

Create and manage databases.

## Installation
```
npm install
```

## Configuration

Copy .envsample file to .env then edit as needed.

## Development
### Initialize Database

Before starting the server, run migrations to create tables.  You can also seed the database tables with contents depending on the environment you are in.

```
npm run migrate:up
npm run seed:up
`
