const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Убедись, что у тебя есть db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;