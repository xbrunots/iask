export default async function handler(req, res) {
  const sql = require('./controller/products_controller');
  var lst = await sql.products();


  var lst2 = lst.concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst).concat(lst);

  return res.status(200).json(lst2)
}