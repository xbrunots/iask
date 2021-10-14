const sql = require('../../../config/mysql');
const verifyToken = require('../../../middlewares/jwt');

require("dotenv").config();
const jwt = require('jsonwebtoken');



export async function me(req, res) {
  var response = {
    statusCode: 501,
    data: null
  }

  try {

    var tokenStatus = verifyToken(req, res);

    if (tokenStatus.success == true) {


      const data = await sql.connection()
        .table('users')
        .where('uid = "' + tokenStatus.uid.uid + '"')
        .select();


      response.statusCode = 200;
      response.data = data;
      return response;

    } else {
      return res.status(403).json({
        message: tokenStatus.message
      });
    }
  }
  catch (error) {
    response.statusCode = 403;
    response.data = error;
    return response;
  }
}
