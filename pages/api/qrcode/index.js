import useSwr from "swr";
import Link from "next/link";
const axios = require("axios").default;
const instance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 99000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

function countdownx(result) {
  var initalData = 6;

  var x = setInterval(function () {
    var now = 1;

    initalData = initalData - now;

    result(initalData);

    if (initalData < 1) {
      clearInterval(x);
      result(0);
    }
  }, 1000);
}

function refreshQrCode(result) {
  try {
    instance
      .get("/start")
      .then(function (response) {
        result(response);
      })
      .catch(function (error) {
        result(error);
      });
  } catch (error) {
    result(error);
  }
}

export default async (req, res) => {
  if (!req.query.code) {
    return res.status(401).json({
      message: "QRCode Inválido!",
    });
  }

  res.setPreviewData({});

  var QRCode = require("qrcode-svg-table");

  var svg = new QRCode(req.query.code).table();

  countdownx(function (time) {
    console.log(time);
    if (time < 1) {
      refreshQrCode(function (response) {
        console.log(response.data);
      });
    }
  });

  res.send(svg);
};
