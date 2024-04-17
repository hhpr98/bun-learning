// Support case-insensitive file name and file extension

console.log(Bun.which("cmd.exe"));

console.log(Bun.which("CMD.exe"));

console.log(Bun.which("cmd.EXE"));

console.log(Bun.which("CMD.EXE"));
