const mysql = require('@hyoga/mysql').default;

const inst = () => new mysql({
    host: 'remotemysql.com',
    port: 3306,
    user: 'Wewr5hhx2L',
    password: 'GvgWl1bzEQ',
    database: 'Wewr5hhx2L',
    charset: 'utf8mb4'
});

exports.sql = inst;