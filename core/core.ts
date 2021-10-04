const venom = require("venom-bot");

let WhatsAppSession = class {
  session: any;
  client: any;
  constructor(session, client) {
    this.session = session;
    this.client = client;
  }
};

var listSessions = [];
class WhatsApp {
  static _instance: WhatsApp;
  constructor() {
    if (WhatsApp._instance) {
      return WhatsApp._instance;
    }
    WhatsApp._instance = this;
  }

  getClient(sessionName, result): void {
    if (
      listSessions.find((x) => x.session == sessionName) != null &&
      listSessions.find((x) => x.session == sessionName) != undefined
    ) {
      //sessão existe
      result(listSessions.find((x) => x.session == sessionName).client);
    } else {
      WhatsApp._instance.init(sessionName, function (client) {
        WhatsApp._instance.start(client, sessionName);

        result(client);
      });
    }
  }

  chatbotInit(client) {
    console.log("liveLocation");

    client.onMessage((message) => {
      if (
        (message.body.toString().toLowerCase().includes("bom dia") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("boa tarde") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("boa noite") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("ola") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("hello") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("hi") &&
          message.isGroupMsg === false) ||
        (message.body.toString().toLowerCase().includes("oi") &&
          message.isGroupMsg === false)
      ) {
        client.sendText(message.from, "Oi sumido ❤️").catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
      }

      if (
        message.body.toString().toLowerCase().includes("projeto") &&
        message.isGroupMsg === false
      ) {
        client
          .sendText(message.from, "Muito bom que perguntou isso")
          .then((_) => {
            client
              .sendText(message.from, "Eu sou o Assistente Virtual da Evolve")
              .then((ass) => {
                client
                  .sendText(
                    message.from,
                    "Estou aqui para aprender e atender, muito alem de um atendimento comum! "
                  )
                  .then((result) => {
                    client
                      .reply(
                        message.from,
                        "🤖🤖🤖🤖🤖🚀🚀🚀🚀🚀",
                        message.id.toString()
                      )
                      .then((result) => {
                        console.log("Result: ", result); //return object success
                      })
                      .catch((erro) => {
                        console.error("Error when sending: ", erro); //return object error
                      });
                  })
                  .catch((erro) => {
                    console.error("Error when sending: ", erro); //return object error
                  });
              })
              .catch((erro) => {
                console.error("Error when sending: ", erro); //return object error
              });
          })
          .catch((erro) => {
            console.error("Error when sending: ", erro); //return object error
          });
      }
    });
  }

  start(client, sessionName): void {
    listSessions.push(new WhatsAppSession(sessionName, client));
  }

  init(sessionName, result): void {
    venom
      .create(
        sessionName,
        undefined,
        (statusSession, session) => {
          console.log("Status Session: ", statusSession);
          //return isLogged || notLogged || browserClose || qrReadSuccess || qrReadFail || autocloseCalled || desconnectedMobile || deleteToken || chatsAvailable || deviceNotConnected || serverWssNotConnected || noOpenBrowser
          //Create session wss return "serverClose" case server for close
          console.log("Session name: ", session);
        },
        undefined
      )
      .then((client) => {
        this.chatbotInit(client);
        result(client);
      })
      .catch((erro) => {
        console.log(erro);
        result(erro);
      });
  }
}

const whatsApp = new WhatsApp();
Object.freeze(whatsApp);

export default whatsApp;
