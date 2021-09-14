export default async function handler(req, res) {
  const sql = require('./controller/profile_controller');
  res.status(200).json(await sql.custumers())
}