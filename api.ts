
// import db from "./data/database";
// import { ITask } from "./types/tasks";

// export const getAllTodos = (): ITask[] => {
//   const query = db.prepare('SELECT * FROM tasks');
//   return query.all() as ITask[];
// };

// export const addTodo = (todo: ITask): ITask => {
//   const insertQuery = db.prepare('INSERT INTO tasks (title, description) VALUES (@title, @description)');
//   const { lastInsertRowid } = insertQuery.run(todo);
//   return { ...todo, id: lastInsertRowid };
// };

// export const editTodo = (todo: ITask): ITask => {
//   const updateQuery = db.prepare('UPDATE tasks SET title = @title, description = @description WHERE id = @id');
//   updateQuery.run(todo);
//   return todo;
// };

// export const deleteTodo = (id: number): void => {
//   const deleteQuery = db.prepare('DELETE FROM tasks WHERE id = ?');
//   deleteQuery.run(id);
// };



import { ITask } from "./types/tasks";

const baseURL = process.env.BASE_URL || 'http://localhost:3001';


export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/tasks`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: ITask): Promise<ITask> =>  {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}

export const editTodo = async (todo: ITask): Promise<ITask> =>  {
    const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const updatedTodo = await res.json();
    return updatedTodo;
}

export const deleteTodo = async (id: string): Promise<void> =>  {
    await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE'
    })
}