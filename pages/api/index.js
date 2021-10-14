const json = {
  api: {
    status: "Online",
    version: "1", 
    id: (new Date()).getTime().toString(16) 
  }
}

export default function handler(req, res) {
  res.status(200).json(json)
}