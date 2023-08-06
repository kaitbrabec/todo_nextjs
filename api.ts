import { ITask } from "./types/tasks";
import { ref, set } from "firebase/database";
import { db } from "@/firebase/firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { cache } from "react";
import axios from "axios";




// const baseURL = 'http://localhost:3001';



const baseURL = "https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/";


export const getAllTodos = async (): Promise<ITask[]> => {
    try {
      const response = await axios.get<Record<string, ITask>>(`${baseURL}todos.json`, { headers: { "Cache-Control": "no-cache" } });
      const todos = response.data ? Object.values(response.data) : [];
      return todos;
    } catch (error) {
      console.error("Error fetching todos:", error);
      return [];
    }
  };

// export const getAllTodos = async (): Promise<ITask[]> => {
//     const res = await fetch(`${baseURL}.json`, {cache: "no-cache"});
//     const todos = await res.json();
//     return todos;
// }

export const addTodo = async (todo: ITask): Promise<ITask> => {
    try {
      const { id, text } = todo;
      await fetch(`${baseURL}todos/${id}.json`, {
        method: 'PUT', // Use PUT method to set data at a specific path with custom key
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify({ id, text }) // Send both 'id' and 'text' fields
      });
  
      return todo; // Return the added todo item
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };
  

// export const addTodo = async (todo: ITask): Promise<ITask> =>  {
//     const res = await fetch(`${baseURL}todos.json`,  {
//         method: 'POST',
//         headers: {
//             'cache-control': 'no-cache',
//         },
//         body: JSON.stringify(todo)
//     })
//     const newTodo = await res.json();
//     console.log("newTodo", newTodo);
//     return newTodo;
// }

// export const addTodo = async (todo: ITask): Promise<ITask> =>  {
//     const task: ITask = {
//         id: "1",
//         text: "Finish the TypeScript tutorial",
//     };
//     return task
// }

// export const editTodo = async (todo: ITask): Promise<ITask> => {
//     try {
//       const { text } = todo;
//       const res = await fetch(`${baseURL}todos/${id}.json`, {
//         method: 'PATCH', // Use PATCH method to update specific fields
//         headers: {
//           'Content-Type': 'application/json',
//           'cache-control': 'no-cache',
//         },
//         body: JSON.stringify({ text }) // Send only the 'text' field to be updated
//       });
  
//       if (!res.ok) {
//         throw new Error('Failed to update todo.');
//       }
  
//       const updatedTodo = await res.json();
//       return updatedTodo;
//     } catch (error) {
//       console.error('Error  todo:', error);
//       throw error;
//     }
//   };

export const editTodo = async (todo: ITask): Promise<ITask> => {
    try {
      const { id, text } = todo;
  
      // Fetch the existing todo item based on the custom ID
      const response = await fetch(`${baseURL}todos/${id}.json`);
      const existingTodo = await response.json();
  
      // Update the 'text' field of the specific todo item
      await fetch(`${baseURL}todos/${id}/text.json`, {
        method: 'PUT', // Use PUT method to update the 'text' field
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify(text) // Send the new text to update the todo item
      });
  
      return { id, text }; // Return the updated todo item
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };

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
        'cache-control': 'no-cache',
      },
    });
  };
// export const deleteTodo = async (id: string): Promise<void> =>  {
   
// }


