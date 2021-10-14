 
export default async function handler(req, res) { 

  req.uid = null;
  req.token = null;
  req.headers['token'] = null; 

  console.log(req.cookies);
  console.log(req.token);
  return res.status(200).json({
    logout: 'success'
  });
}
