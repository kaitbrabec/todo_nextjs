import { ITask } from "./types/tasks";



// const baseURL = 'http://localhost:3001';
const baseURL = 'https://todoapp-fac75-default-rtdb.europe-west1.firebasedatabase.app/';


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




export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseURL}/todos`);
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
    const res = await fetch(`${baseURL}/todos`, {
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

export const editTodo = async (todo: ITask): Promise<ITask> =>  {
    const task: ITask = {
        id: "1",
        text: "Finish the TypeScript tutorial",
    };
    return task
}

// export const deleteTodo = async (id: string): Promise<void> =>  {
//     await fetch(`${baseURL}/tasks/${id}`, {
//         method: 'DELETE'
//     })
// }

export const deleteTodo = async (id: string): Promise<void> =>  {
   
}


