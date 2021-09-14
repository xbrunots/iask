const mysql = require('@hyoga/mysql').default;
require('dotenv/config');

console.log("PROCESS ENV")
console.log(process.env.APP_NAME)

const inst = () => new mysql({
    host: process.env.PLANETSCALE_DB_HOST,
    port: 3306,
    user: process.env.PLANETSCALE_DB_USERNAME,
    password: process.env.PLANETSCALE_DB_PASSWORD,
    database: process.env.PLANETSCALE_DB,
    charset: 'utf8mb4'
});

exports.sql = inst;