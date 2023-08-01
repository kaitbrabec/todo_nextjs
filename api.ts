import { ITask } from "./types/tasks";
import { ref, set } from "firebase/database";
import { db } from "@/firebase/firebase";




// const baseURL = 'http://localhost:3001';


// export const getAllTodos = async (): Promise<ITask[]> => {
//     try {
//       const response = await axios.get<ITask[]>(`${baseURL}/todos.json`);
//       return response.data;
//     } catch (error) {
//       // Handle any errors that occurred during the fetch or JSON parsing
//       console.error('Error fetching todos:', error);
//       throw error; // Rethrow the error to inform the caller about the failure
//     }
//   };


const baseURL = "https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/";

export const getAllTodos = async (): Promise<ITask[]> => {
    try {
      const response = await fetch(`${baseURL}todos.json`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      });
      const data = await response.json();
      // Convert data object to an array of tasks
      const tasks: ITask[] = data ? Object.values(data) : [];
      return tasks;
    } catch (error) {
      // Handle error
      console.error('Error fetching todos:', error);
      throw error;
    }
  };
// export const getAllTodos = async (): Promise<ITask[]> => {
//     const res = await fetch(`${baseURL}todos.json`);
//     const todos = await res.json();
//     return todos;
// }

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

export const deleteTodo = async (id: string): Promise<void> =>  {
    await fetch(`${baseURL}/todos.json`, {
        method: 'DELETE'
    })
}

// export const deleteTodo = async (id: string): Promise<void> =>  {
   
// }


