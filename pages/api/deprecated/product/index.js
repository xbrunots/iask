export default async function handler(req, res) {
  const controller = require('./controller/product_controller');
  res.status(200).json(await controller.products())
}