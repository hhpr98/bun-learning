# Getting started with bunJS

A Javascript runtime, a JavaScript package manager, same as npm, yarn

## Description

I will check and upgrade each version of bun.The purpose of this repository is just testing bun behavior, bun working and bun experiance. I don't think I can start to use bun in a real project. The first thing of bun is not actually support Windows OS, I am using WSL for bypass this installation.

## Getting Started

### Dependencies

* Visual Studio Code (I am currently working on this ide)

### Enviroment
* BunJS: **v1.1.4** [download](https://bun.sh/)
* ~~Windows SubSytem for Linux latest Update (I am using WSL Ubuntu 22.04)~~ Bun v1.1.0 supported Windows OS

### Installing

__ On Linux __
* Install unzip (on WSL - optional)
```sh
sudo apt install unzip
```
* Install bunJS
```sh
curl -fsSL https://bun.sh/install | bash
```
* Added bunJS to enviroment
```sh
source /home/<user>/.bashrc
```

__ On Windows __
```sh
powershell -c "irm bun.sh/install.ps1|iex"
```


* Check the bun version
```sh
bun -v # or bun --version # The result will be 1.1.4
```
* To init a bun repository
```sh
bun init # then fill the data into following steps
```

* To upgrade bun to latest version
```sh
bun upgrade
# bun upgrade --canary if you want to point to every commit in main
# see https://github.com/oven-sh/bun for more detail
```

### Executing program

* Install prequisites packages
```sh
bun install
```
* Start new test file from bun
```sh
bun foo\bun_test.ts
```

* Start new express server from bun
```sh
bun server.ts
```

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

## Help

Please free to raise if you have any issue here.
[bun-learning report](https://github.com/hhpr98/bun-learning/issues)

## Authors

Contributors names and contact info

Nguyễn Hữu Hòa
[@hhpr98](https://github.com/hhpr98)

## Version History

* Starting with BunJS 1.0.7
* Init documentation
* Init project
* Upgrade to BunJS version 1.0.21
* Upgrade to BunJS version 1.0.22
* Upgrade to BunJS version 1.0.30
* Install simple express server with BunJS
* Upgrade to BunJS version 1.0.31
* Upgrade to BunJS version 1.0.33
* Upgrade to BunJS version 1.1.1, Windows supported
* Upgrade to BunJS version 1.1.2, Add new bun test with seq, yes, basename, dirname
* Upgrade to BunJS version 1.1.3
* Upgrade to BunJS version 1.1.4, test bun workspace

## License

This project is licensed under the [@hhpr98](https://github.com/hhpr98) License - see the README.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [@hhpr98](https://github.com/hhpr98)
