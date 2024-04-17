import { Database, constants } from "bun:sqlite";

const db = new Database();
// Ensure WAL mode is NOT persistent
// this prevents wal files from lingering after the database is closed
db.fileControl(constants.SQLITE_FCNTL_PERSIST_WAL, 0);
