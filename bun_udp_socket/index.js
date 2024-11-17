import { udpSocket } from "bun";

const server = await udpSocket({
  socket: {
    data(socket, buf, port, addr) {
      console.log(`message from ${addr}:${port}:`);
      console.log(buf.toString());
    },
  },
});

const client = await udpSocket({});
client.send("Hello!", server.port, "127.0.0.1");
