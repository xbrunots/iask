 const mysql = require('../../../../config/mysql');

 var conn = mysql.sql();

 const customers = async () => {
     var data = await conn.table('customers').order('id desc').select();
     console.log(data);
     return data;
 }

 exports.custumers = customers;