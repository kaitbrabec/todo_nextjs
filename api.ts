import { ITask } from "./types/tasks";
import { ref, set } from "firebase/database";
import { db } from "@/firebase/firebase";
import { NextApiRequest, NextApiResponse } from "next";




// const baseURL = 'http://localhost:3001';



const baseURL = "https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/";




export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}todos.json`);
    const todos = await res.json();
    return todos;
}

// const fetch = require("node-fetch");

// fetch('https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/todos.json')
// .then(result => result.text())
// .then(textformat => console.log(textformat))

// export const getAllTodos = async (): Promise<ITask[]> => {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return [task]
// }

export const addTodo = async (todo: ITask): Promise<ITask> =>  {
    const res = await fetch(`${baseURL}todos.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;
}

// export const addTodo = async (todo: ITask): Promise<ITask> =>  {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return task
// }

export const editTodo = async (todo: ITask): Promise<ITask> => {
    try {
      const { id, text } = todo;
      const res = await fetch(`${baseURL}todos/${id}.json`, {
        method: 'PATCH', // Use PATCH method to update specific fields
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text }) // Send only the 'text' field to be updated
      });
  
      if (!res.ok) {
        throw new Error('Failed to update todo.');
      }
  
      const updatedTodo = await res.json();
      return updatedTodo;
    } catch (error) {
      console.error('Error editing todo:', error);
      throw error;
    }
  };

// export const editTodo = async (todo: ITask): Promise<ITask> =>  {
//     const res = await fetch(`${baseURL}/tasks/${todo.id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(todo)
//     })
//     const updatedTodo = await res.json();
//     return updatedTodo;
// }

// export const editTodo = async (todo: ITask): Promise<ITask> =>  {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return task
// }

export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/todos/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
// export const deleteTodo = async (id: string): Promise<void> =>  {
   
// }


