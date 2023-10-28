const server = Bun.serve({
  development: true, // By default, development mode is enabled unless NODE_ENV is production
  port: 8080, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog page!");
    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);