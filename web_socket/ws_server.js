const WebSocket = require("ws");

// Create a WebSocket server on port 3000
const wss = new WebSocket.Server({ port: 3000 });

wss.on("connection", (ws) => {
  console.log("New client connected");

  // Handle incoming messages from the client
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on("close", (code, reason) => {
    console.log(`Connection closed: Code ${code}, Reason: ${reason}`);
  });

  // Send a welcome message to the client
  ws.send("Welcome to the WebSocket server!");
});

// Start the server
console.log("WebSocket server is running on ws://localhost:3000");
