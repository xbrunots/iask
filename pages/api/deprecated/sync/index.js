var error = {}
var success = {}
import whatsApp from '../../../../core/core'
import sessionMiddleware from '../../../../middlewares/Sessions'
const controller = require('./controller/sync_controller');


export default async function handler(req, res) {
  sessionMiddleware(req, res);

  whatsApp.getClient(req.headers.session, function (client) {
    start(client);
  })


  function start(client) {
    client
      .getAllContacts()
      .then((result) => {

        var columnList = [];

        result.map((item) => {
          if (item["id"] != null && item["id"] != undefined && item["id"]["user"] != null && item["id"]["user"] != undefined) {
            columnList.push({
              name: item["name"] != null && item["name"] != undefined ? item["name"] : null,
              whatsapp: item["id"]["user"],
              picture: item["profilePicThumbObj"] != null && item["profilePicThumbObj"] != undefined && item["profilePicThumbObj"]["eurl"] != null && item["profilePicThumbObj"]["eurl"] != undefined ? item["profilePicThumbObj"]["eurl"] : null,
              parent: req.headers.session
            });
          }
        });

        controller.deleteClients({
          parent: req.headers.session
        }).then((deletedResult) => {

          controller.insertClients(columnList).then((r) => {
            success.success = true;
            success.data = r;
            success.message = result.length + " itens atualizados para sessão " + req.headers.session;
            res.status(200).json(success);
          }).catch((erro) => {
            console.error('Error when sending: ', erro);
            error.success = false;
            error.error = erro;
            res.status(400).json(error);
          });

        })

      })
      .catch((erro) => {
        console.error('Error when sending: ', erro);
        error.success = false;
        error.error = erro;
        res.status(400).json(error);
      });
  }
}