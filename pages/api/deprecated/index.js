const json = {
  api: {
    status: "Online",
    version: "v0.0.0-dev",
    path: "dev"
  }
}

export default function handler(req, res) {
  res.status(200).json(json)
}