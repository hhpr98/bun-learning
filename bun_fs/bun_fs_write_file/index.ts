import { writeFile } from "fs/promises";
import { openSync } from "fs";

// Previously in Bun, fs.writeFile would truncate the file when called with a file descriptor or a path.
// This has been fixed to now match Node.js behavior and "only truncate when called with a path".

const fd = openSync(".\\bun_fs\\bun_fs_write_file\\file.txt", "w");
// await writeFile(fd, "hello"); // does not truncate (keep the file)
await writeFile(".\\bun_fs\\bun_fs_write_file\\file.txt", "hello"); // truncates
