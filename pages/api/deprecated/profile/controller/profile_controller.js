 const mysql = require('../../../../config/mysql');

 var conn = mysql.sql();

 const customers = async () => {
     var data = await conn.table('customers').order('picture').select();
     console.log(data);
     return data;
 }

 exports.custumers = customers;