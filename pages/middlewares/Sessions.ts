function sessionMiddleware(req, res) {
  req.headers.session = req.headers.session == null ||  req.headers.session == undefined  ? "XPTO" : req.headers.session;
  }
  
  export default sessionMiddleware