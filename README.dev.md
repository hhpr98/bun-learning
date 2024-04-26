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
bun build --compile --target=bun-linux-x64 app.ts

# Windows x64
bun build --compile --target=bun-windows-x64 app.ts

# macOS Silicon
bun build --compile --target=bun-darwin-arm64 app.ts

# Linux arm64
bun build --compile --target=bun-linux-arm64 app.ts
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
