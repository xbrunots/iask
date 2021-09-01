const wbm = require('wbm');
export default function handler(req, res) {

  wbm.start({
      showBrowser: false,
      qrCodeData: true,
      session: true
    })
    .then(async qrCodeData => {
      console.log(qrCodeData);

      res.status(200).json({
        code: qrCodeData
      });

      await wbm.waitQRCode();
      await wbm.end();
    }).catch(err => {
      console.log(err);
    });
}