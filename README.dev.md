### Executing program test bun

* Bun test seq, yes, basename, dirname
```sh
bun foo\hello.js
```

* Bun start both script without open 2 (or more) terminals and cd into them
```sh
# bun run --filter <workspace> <script>
# OR bun --filter='*' dev
# OR bun --filter 'packages/api' --filter 'packages/frontend' dev
cd bun_workspaces
bun run --filter "*" dev # will run both dev script of ws1 and ws2
```

* Bun open file with no 2nd parameter (callback)
```sh
bun bun_fs\bun_fs_close\index.ts
```

* Bun writeFile example
```sh
bun bun_fs\bun_fs_write_file\index.ts
```

* Bun fs appendFile example
```sh
bun bun_fs\bun_fs_append_file\index.ts
```

* Bun using database, sqlite file control, db_throw_on_err example
```sh
bun bun_database\bun_db_using.ts
bun bun_database\bun_db_file_control.ts
bun bun_database\bun_db_close_on_throw_error.ts
bun bun_database\bun_db_join.ts
```

* Bun which() with case-insensitive
```sh
bun foo\bun_which.ts
```

* Bun cwd flag (change working directory)
```sh
bun --cwd=.\foo run bun_test.ts
```

* Bun abort signal (for referal only)
```ts
const first = new AbortController().signal;
const second = new AbortController().signal;
fetch("https://example.com", {
  signal: first,
});
fetch("https://example.com", {
  signal: second,
});

const abortSignal = AbortSignal.any([first, second]);

// Cancel this when either `first` or `second` is aborted
await fetch("https://example.com/slow", { signal: abortSignal });
```

* To cross-compile a TypeScript or JavaScript application to a different platform, use the `--target` option with `bun build --compile`:

```sh
# Linux x64
bun build --compile --target=bun-linux-x64 server.ts

# Windows x64
bun build --compile --target=bun-windows-x64 server.ts

# macOS Silicon
bun build --compile --target=bun-darwin-arm64 server.ts

# Linux arm64
bun build --compile --target=bun-linux-arm64 server.ts
```

* Bun now allow to comment in package.json (but we do not recommend it)
```json
{
  "name": "bun-learning",
  // Now allow comment in bun.js
  "module": "index.ts",
  "type": "module",
  "devDependencies": {
    "bun-types": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "express": "^4.18.3"
  }
}
```

* Bun run with `--hot` or `--watch` command to automatically reload bun (if have TC39 stage3 proposal Import Attributes)

```ts
import html from "./index.html" with type { type: "text" };
console.log(html);

import json from "./config.foo" with { type: "json" };
console.log(json); // { "name": "app" } (converted to JSON object)

import cfg from "./Configfile" with { type: "toml" };
console.log(cfg); // { "name": "app" }
```

* Bun.serve() now supports Server Name Indication (SNI)

You can now specify multiple `serverName` TLS entries in `Bun.serve`. This is useful when you want to serve multiple TLS certificates or hostnames on the same port.

```ts
import { serve } from "bun";

serve({
  port: 443,
  tls: [
    {
      cert: Bun.file("./example.pem"),
      key: Bun.file("./example-key.pem"),
      serverName: "*.example.com",
    },
    {
      cert: Bun.file("./test.pem"),
      key: Bun.file("./test-key.pem"),
      serverName: "*.test.com",
    },
  ],
  fetch(request) {
    return new Response("Using TLS!");
  },
});
```

* Bun.Glob (scan file)

```sh
bun run bun_glob\index.ts
```

* Bun compile (compile to a `bun_test.exe` file)
```sh
bun build --compile .\foo\bun_test.ts --outfile .\foo\build\bun_test
```

* Dlopen (open lib) with bun (supported `.so`, `.dylib`, `.dll` file)
```ts
import { dlopen } from "bun:ffi";

const lib = dlopen(import.meta.resolve("./lib.so") /* ... symbols */);
```

* Bun build with `--define` param
```sh
bun --cwd=.\bun_define build .\index.ts --target=bun --outfile=build.js # none crash
bun --cwd=.\bun_define build .\index.ts --target=bun --outfile=build.js --define "console.log=console.error"
```

* Bun test with existsSync
```sh
bun --cwd=.\bun_fs\bun_fs_exist_sync run .\index.ts # Expected is `false false false true`
```

* Bun with `npm-run-all` to run parrallel scripts
```json
{
  "name": "bun-learning",
  "module": "index.ts",
  "type": "module",
  "devDependencies": {
    "bun-types": "latest"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "express": "^4.18.3",
    "npm-run-all": "^4.1.5"
  },
  "scripts": {
    "all": "npm-run-all --parallel start dev",
    "start": "bun run server.ts",
    "dev": "bun --cwd=foo run bun_test.ts"
  }
}
```

Just run `bun run all` to execute both `start` and `dev`

* Bun test with crypto
```sh
bun --cwd=bun_crypto index.ts # 3338be694f50c5f338814986cdf0686453a888b84f424d792af4b9202398f392
```

* Bunx cowsay
```sh
bunx cowsay "Hello, world!"
```

* Bun UDP socket
```sh
bun bun_udp_socket\index.js
```
The output is:
```
message from 127.0.0.1:54324:
Hello!
```

* Bun node:dgram
```sh
bun node_dgram\send-10-messages.js
```

* Bun request override
```sh
bun foo\bun_request.js
```

The output is:
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot POST /</pre>  <===== See the method here
</body>
</html>
```

* Bun node:dns
```sh
bun node_dns\index.js # hiii
```

* Bun json import
```
bun bun_json_import\index.js
```

The ouput is:
```json
{
  test: 0,
}
```
