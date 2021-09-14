export default async function handler(req, res) {
  const sql = require('./controller/clients_controller');

  var response = await sql.custumers();

  return res.status(response.statusCode).json(response.data);
}