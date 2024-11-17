const dgram = require("dgram");
let count = 0;
const { promise, resolve } = Promise.withResolvers();

const server = dgram.createSocket("udp4");
server.on("message", (msg, { port, address }) => {
  console.log(`server got: ${msg} from ${address}:${port}`);
  if (count++ === 9) process.exit(0);
});
server.bind(41234);

const client = dgram.createSocket("udp4");
for (let i = 0; i < 10; i++) {
  client.send("hello", 41234, "127.0.0.1");
}
await promise;
