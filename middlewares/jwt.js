const jwt = require("jsonwebtoken");
 

const config = process.env;

const verifyToken = (req, res) => { 

  const token = req.query.token || req.headers["token"];
 
if(token == null || token == undefined){ 
   return {success: false ,message: "Token inválido, refaça o login..."} ;
}
  if (!token) {  
   return {success: false ,message: "Um token é necessário para autenticação"} ;
  }
  try {
    const decoded = jwt.verify(token, config.SECRET);
    req.uid = decoded;
    req.token = token; 

   return {success: true ,message: "Bem vindo!", uid: decoded} ;

  } catch (err) { 
     return {success: false ,message: "Token Inválido", error: err} ;
  }
};

module.exports = verifyToken;
