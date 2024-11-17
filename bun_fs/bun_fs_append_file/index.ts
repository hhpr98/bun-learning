import { open } from "fs/promises";

const file = await open(".\\bun_fs\\bun_fs_append_file\\file.txt", "a");
await file.appendFile("append bun 1.1.34"); // appends, will do not truncate file
