var error = {}
var success = {}
const wbm = require('wbm');
export default function handler(req, res) {

  const {
    number
  } = req.query;

  const text = req.query.text;

  wbm.start({
      showBrowser: false,
      qrCodeData: true,
      session: true
    })
    .then(async () => {
      const contacts = [{
        phone: '5515997572550',
        name: 'Bruno Brito'
      }, ];

      var status = await wbm.send(contacts, 'Hey {{name}}, ' + text);

      await wbm.end();

      success.success = true;
      success.message = "Mensagem enviada com sucesso!";
      success.number = number;
      success.text = text;
      success.status = status;
      res.status(200).json(success);

    }).catch(err => {
      error.success = false;
      error.error = err;
      error.message = "Mensagem não enviada!";
      res.status(400).json(error);
    });


}