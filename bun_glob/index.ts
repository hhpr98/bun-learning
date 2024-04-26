import { Glob } from "bun";

const glob = new Glob("C:\\git\\bun-learning\\bun_database\\*");
const matches = [...glob.scanSync("bun")];

console.log(matches.length); // 5

console.log(matches);
