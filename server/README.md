# ToDo Server

# Server created with NestJS
Api documentation created with Swagger
Look Api .../swagger

## Configuration

### How to change providers

Open `server/.env` and change the value of `MYSQL` to the provider you would like to use, then set the environment variables for that provider.

The setup for Shopify would look like this for example:

```
SQL_DIALECT=mysql
SQL_LOGGING=true
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_NAME=todo
```

## Features

- Create User
- Login
- Logout
- LoginCheck

## Database

Database created with free online service freedb.tech
https://freedb.tech/