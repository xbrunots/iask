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
      .then((client) => result(client))
      .catch((erro) => {
        console.log(erro);
        result(erro);
      });
  }
}

const whatsApp = new WhatsApp();
Object.freeze(whatsApp);

export default whatsApp;
