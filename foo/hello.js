import { $ } from "bun";

await $`seq 0 3`;
// 0
// 1
// 2
// 3

await $`basename $0`; // bun.exe (On Windows)
await $`basename $1`; // hello.js
await $`dirname $1`; // foo