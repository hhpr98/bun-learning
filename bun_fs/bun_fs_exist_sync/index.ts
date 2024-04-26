import { existsSync } from "node:fs";

console.log(existsSync()); // false
console.log(existsSync({ not: "a", valid: "path" })); // false
console.log(existsSync(-10281)); // false
console.log(existsSync("./index.ts")); // true
