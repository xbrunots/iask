

export default async function handler(req, res) {
  const sql = require('./controller'); 
  
  if (req.method.toUpperCase() == "GET" || req.method.toUpperCase() == "POST") { 
      var response = await sql.me(req, res); 
      return res.status(response.statusCode).json(response.data);
  }
  
  return res.status(403).json({
    message: "Falha na requisição, verifique o verbo http, body e o endpoint com seus parâmetros"
  });
}