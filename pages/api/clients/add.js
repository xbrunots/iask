export default async function handler(req, res) {
  if (req.method.toUpperCase() != "POST") {
    return res.status(403).json({
      message: "Parâmetros incorretos, verifique o endpoint e os atributos do request..."
    });
  }

  const sql = require('./controller/clients_controller');

  var response = await sql.add(req.body);

  return res.status(response.statusCode).json(response.data);
}