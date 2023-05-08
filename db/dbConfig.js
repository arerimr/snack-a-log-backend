const pgp = require('pg-promise')();

require('dotenv').config();

// const { PG_HOST, PG_PORT, PG_DATABASE, PG_USER} = process.env

const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER
};

const db = pgp(cn);

module.exports = db;