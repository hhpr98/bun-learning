import { $ } from "bun";

await $`seq 0 3`;
// 0
// 1
// 2
// 3

await $`basename $0`; // bun.exe (On Windows)
await $`basename $1`; // hello.js
await $`dirname $1`; // foo -> this is expected result but for now it is empty (bun 1.1.34 reported)
// https://github.com/oven-sh/bun/issues/15202
