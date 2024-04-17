import { open } from "fs/promises";

const file = await open(".\\bun_fs\\bun_fs_append_file\\file.txt", "a");
await file.appendFile("append_more"); // appends, will do not truncate file
