var error = {}
var success = {}
import whatsApp from '../../../core/core'
import sessionMiddleware from '../../../middlewares/Sessions'


export default async function handler(req, res) {
  sessionMiddleware(req, res);
  whatsApp.getClient(req.headers.session, function (client) {
    start(client);
  })

  function start(client) {
    client
      .getAllChatsGroups()
      .then((result) => {
        success.success = true;
        success.fullResponse = result;
        client.getAllChatsTransmission().then((resultListas) => {
          var list = success.fullResponse.concat(resultListas);
          success.fullResponse = list;
          res.status(200).json(success);
        }).catch((erro) => {
          res.status(200).json(success);
        });

      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
        error.success = false;
        error.error = erro;
        res.status(400).json(error);
      });
  }




}