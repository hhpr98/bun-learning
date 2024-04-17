// You can now pass a throwOnError argument to Database#close to throw an error if the database cannot be closed for any reason.

import { Database } from "bun:sqlite";

const db = new Database();
db.query("SELECT * FROM users");
// db.close(true); // "Database is locked"
db.close(false); // no error, stop new queries from being created
