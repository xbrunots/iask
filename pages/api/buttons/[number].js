var error = {}
var success = {}
import whatsApp from '../core/core'
import sessionMiddleware from '../../middlewares/Sessions'


export default async function handler(req, res) {

  const {
    number
  } = req.query;

  const title = req.query.title;
  const description = req.query.Description;


  const arrayButtons = req.body.data == null ? [] : req.body.data;


  const buttons = []



  var index = 0;
  arrayButtons.forEach(function (element) {
    index = index + 1;
    buttons.push({
      buttonId: 'id' + index,
      buttonText: {
        displayText: element.text
      },
      type: 1
    })
  });


  if (buttons.length < 1) {
    console.error('nenhum botão encontrado');
    error.success = false;
    error.message = "Nenhum botão encontrado!";
    error.fullResponse = req.body;
    res.status(400).json(error);
    return;
  }

  sessionMiddleware(req, res);

  whatsApp.getClient(req.h, function (client) {
    start(client);
  })

  function start(client) {
    client
      .sendButtons(number + '@c.us', title, buttons, description)
      .then((result) => {
        console.log('Result: ', result);
        success.success = true;
        success.message = "Mensagem enviada com sucesso!";
        success.number = number;
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