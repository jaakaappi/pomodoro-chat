import { WebSocketServer } from "ws";
import crypto from "crypto";

let rooms = [];
let connectionsPerRoom = {};

const wss = new WebSocketServer({ port: 3000 });

const createRoom = () => {};

const reconnect = () => {};

const broadcast = (room, message, ownId) => {
  connectionsPerRoom[room].forEach((connection) => {
    if (connection.id !== ownId) {
      connection.send(message);
    }
  });
};

wss.on("connection", function connection(ws) {
  ws.id = crypto.randomUUID();
  ws.on("message", function message(data) {
    console.log("received: %s", data);
    try {
      const message = JSON.parse(data);
      switch (message.type) {
        case "join":
          if (!rooms.includes(message.room)) {
            rooms.push(message.room);
            connectionsPerRoom[message.room] = [];
          }
          connectionsPerRoom[message.room].push(ws);
          broadcast(message.room, `${message.userName} joined!`, ws.id);
          ws.send(`Joined ${message.room}`);
      }
    } catch (exception) {
      console.log(`Failed to parse message: ${exception}`);
    }
  });
});
