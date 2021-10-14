const mysql = require('@hyoga/mysql').default;


console.log("PROCESS ENV")
console.log(process.env.DATABASE_NAME)

const inst = () => new mysql({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    charset: 'utf8mb4'
});

exports.connection = inst;
