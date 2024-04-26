import { createHash } from "crypto";

const hash = createHash("sha3-256");
// Supported (addition except already support such as sha-256, md5,...):
// sha3-224
// sha3-256
// sha3-384
// sha3-512
// sha512-224
// blake2b512
hash.update("hello");
console.log(hash.digest("hex"));
