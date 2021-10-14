

const verifyToken = require('../../../middlewares/jwt');
import Cors from 'cors'


export default async function handler(req, res) {
  const sql = require('./controller');

  const { $table } = req.query

  const core = {
    query: req.query,
    getters: req.headers
  }


  var tokenStatus = verifyToken(req, res);

  if (tokenStatus.success == true) {

    if (req.headers["token"] == null || req.headers["token"] == undefined) {
      return res.status(403).json({
        message: "Falha na requisição, verifique o verbo http, body e o endpoint com seus parâmetros"
      });
    }

    if ($table == null || $table == undefined || $table.length == 0) {
      return res.status(403)
        .json({
          message: "Transação indefinida!"
        });
    }

    if (req.method.toUpperCase() == "POST") {
      var response = await sql.add($table, req.body);
      return res.status(response.statusCode).json(response.data);
    }

    if (req.method.toUpperCase() == "GET") {
      var response = await sql.fetch($table, core);
      return res.status(response.statusCode).json(response.data);
    }


    if (req.method.toUpperCase() == "PUT") {
      var response = await sql.update($table, core, req.body);
      return res.status(response.statusCode).json(response.data);
    }

    if (req.method.toUpperCase() == "DELETE") {
      var response = await sql.deleteItem($table, core);
      return res.status(response.statusCode).json(response.data);
    }

  } else {

    return res.status(403).json({
      message: tokenStatus.message
    });
  }

}
