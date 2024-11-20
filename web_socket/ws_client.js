const ws = new WebSocket("ws://localhost:3000");

ws.onopen = () => {
  console.log('Connected to server');
  ws.send('Hello Server!');
};

ws.onmessage = (event) => {
  console.log(`Server says: ${event.data}`);
};

ws.onclose = ({ code, reason }) => {
  console.log(`Connection closed: Code ${code}, Reason: ${reason}`);
};