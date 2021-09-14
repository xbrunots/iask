var error = {}
var success = {}
import whatsApp from '../../../../core/core'
import sessionMiddleware from '../../../../middlewares/Sessions'


export default async function handler(req, res) {
  sessionMiddleware(req, res);
  whatsApp.getClient(req.headers.session, function (client) {
    start(client);
  })

  const {
    number
  } = req.query;

  function start(client) {
    client.onMessage(message => {
        console.log('message ', result);
        success.success = true;
        success.fullResponse = message;
        return res.status(200).json(success);
      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
        error.success = false;
        error.error = erro;
        return res.status(400).json(error);
      });
  }
}