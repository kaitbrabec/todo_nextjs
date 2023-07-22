import db from './database.js';

const insertStatement = db.prepare('INSERT INTO tasks (title, description) VALUES (?, ?)');
const selectStatement = db.prepare('SELECT * FROM tasks');

// Insert a new task
const insertedTask = insertStatement.run('Task 1', 'This is the description of Task 1');
console.log('Inserted Task: ', insertedTask);

// Query all tasks
const tasks = selectStatement.all();
console.log('All Tasks: ', tasks);
