import { Database } from "bun:sqlite";

const db = new Database();

db.query(
  "CREATE TABLE Users (Id INTEGER PRIMARY KEY, Name VARCHAR(255));",
).run();

db.query(
  "CREATE TABLE Cars (Id INTEGER PRIMARY KEY, Driver INTEGER, FOREIGN KEY (Driver) REFERENCES Users(Id))",
).run();

db.query('INSERT INTO Users (Id, Name) VALUES (1, "Alice");').run();
db.query("INSERT INTO Cars (Id, Driver) VALUES (1, 1);").run();

const car = db.query("SELECT * FROM Cars JOIN Users ON Driver=Users.Id").get();

console.log(car);

db.close();

// Expected result is
// {
//   Driver: 1,
//   Id: 1,
//   Name: "Alice",
// }
