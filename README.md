# Getting started with bunJS

A Javascript runtime, a JavaScript package manager, same as npm, yarn

## Description

I will check and upgrade each version of bun.The purpose of this repository is just testing bun behavior, bun working and bun experiance. I don't think I can start to use bun in a real project. The first thing of bun is not actually support Windows OS, I am using WSL for bypass this installation.

## Getting Started

### Dependencies

* Visual Studio Code (I am currently working on this ide)

### Enviroment
* BunJS: **v1.0.7** [download](https://bun.sh/)
* Windows SubSytem for Linux latest Update (I am using WSL Ubuntu 22.04)

### Installing

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
* Check the bun version
```sh
bun -v # The result will be 1.0.7
```
* To init a bun repository
```sh
bun init # then fill the data into following steps
```

### Executing program

* Install prequisites packages
```sh
bun install
```
* Start new index.ts from bun
```sh
bun run index.ts
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

## License

This project is licensed under the [@hhpr98] License - see the readme.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [@hhpr98](https://github.com/hhpr98)
