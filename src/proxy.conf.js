const PROXY_CONFIG = [
  {
    context: [
      "/users",
    ],
    target: "http://localhost:2429/api",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
