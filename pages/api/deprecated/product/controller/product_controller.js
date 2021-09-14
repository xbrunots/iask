 const mysql = require('../../../../../config/mysql');

 var conn = mysql.sql();

 const products = async () => {
     var data = await conn.table('products').order('picture').select();
     console.log(data);
     return data;
 }

 exports.products = products;