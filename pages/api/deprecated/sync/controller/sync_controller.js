 const mysql = require('../../../../../config/mysql');

 var conn = mysql.sql();

 const getClients = async () => {
     var data = await conn.table('customers').order('id desc').select();
     console.log(data);
     return data;
 }

 const insertClients = async (columnList) => {
     return await conn.table('customers').addMany(columnList);
 }

 const deleteClients = async (where) => {
     return await conn.table('customers').delete(where);
 }

 exports.getClients = getClients;
 exports.insertClients = insertClients;
 exports.deleteClients = deleteClients;