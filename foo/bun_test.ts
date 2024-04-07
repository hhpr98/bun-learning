// This script for testing bun only
// syntax: bun run bun_test.ts
const server = Bun.serve({
  development: true, // By default, development mode is enabled unless NODE_ENV is production
  port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog page!");
    throw new Error("Page Not Found");
  },
  error(error) {
    return new Response(`<pre>${error}\n${error.stack}</pre>`, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
