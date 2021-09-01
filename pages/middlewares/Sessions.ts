function sessionMiddleware(req, res) {
  req.headers.session = req.headers.session == null ? "XPTO" : req.headers.session;
  }
  
  export default sessionMiddleware