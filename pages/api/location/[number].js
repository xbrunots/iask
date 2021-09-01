var error = {}
var success = {}
import whatsApp from '../core/core'
import sessionMiddleware from '../../middlewares/Sessions'


export default async function handler(req, res) {

  const {
    number
  } = req.query;

  const lat = req.query.lat;
  const long = req.query.long;
  const text = req.query.text;
  sessionMiddleware(req, res);
  whatsApp.getClient(req.headers.session, function (client) {
    start(client);
  })

  function start(client) {
    client
      .sendLocation(number + '@c.us', lat, long, text)
      .then((result) => {
        console.log('Result: ', result);
        success.success = true;
        success.message = "Mensagem enviada com sucesso!";
        success.number = number;
        success.text = text;
        success.fullResponse = result;
        res.status(200).json(success);
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
        error.success = false;
        error.error = erro;
        error.message = "Mensagem não enviada!";
        res.status(400).json(error);
      });
  }
}