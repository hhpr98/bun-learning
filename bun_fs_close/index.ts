import fs from "fs";

fs.open(".\\bun_fs_close\\test.txt", "r", (err, fd) => {
  if (err) {
    console.log(`Failed to open file: ${err}`);
    return;
  }
  // View the file description
  console.log(`File description is: ${fd}`);

  // missing the callback in the 2nd argument!
  fs.close(fd);
});

fs.open(".\\bun_fs_close\\test.txt", "r", (err, fd) => {
  if (err) {
    console.log(`Failed to open file: ${err}`);
    return;
  }
  // View the file description
  console.log(`File description is: ${fd}`);

  // With the callback in the 2nd argument!
  fs.close(fd, (err) => {
    if (err)
      console.log("Close file error");
    else
      console.log("Close file successfully");
  });
});
