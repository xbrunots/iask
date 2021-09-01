function sessionMiddleware(req, res) {
  req.headers.session =
    req.headers.session == null ||
    req.headers.session == undefined ||
    req.headers == undefined ||
    req.headers == null
      ? "XPTO"
      : req.headers.session;
}

export default sessionMiddleware;
