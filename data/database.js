// database.ts
import sqlite from 'better-sqlite3';

import path from 'path';

const dbPath = path.resolve('./todos.db');
const db = sqlite(dbPath, { verbose: console.log });


db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT
  );
`);

export default db;
