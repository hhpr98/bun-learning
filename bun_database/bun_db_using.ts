// The using syntax is now supported for Database and Statement objects in bun:sqlite.
// This syntax will automatically call Database#close and Statement#finalize when the scope ends

import { Database } from "bun:sqlite";

{
  // Automatically close the Database at the end of this scope
  using db = new Database(".\\bun_database\\file.db");

  // Automatically finalize the statement at the end of this scope.
  using query = db.query("SELECT * FROM users");
  for (const row of query.all()) {
    console.log(row);
  }
}
