import { ITask } from "./types/tasks";
import { ref, set, onValue, off } from "firebase/database";
import { db } from "@/firebase/firebase";
import { NextApiRequest, NextApiResponse } from "next";
import { cache } from "react";
import axios from "axios";





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



export const addTodo = async (todo: ITask): Promise<ITask> => {
    try {
      const { id, text, status } = todo;
      await fetch(`${baseURL}todos/${id}.json`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify({ id, text, status }) 
      });
  
      return todo; 
    } catch (error) {
      console.error('Error adding todo:', error);
      throw error;
    }
  };
  


export const editTodo = async (todo: ITask): Promise<ITask> => {
    try {
      const { id, text, status } = todo;
  
    
      const response = await fetch(`${baseURL}todos/${id}.json`);
      const existingTodo = await response.json();
  
     
      await fetch(`${baseURL}todos/${id}/text.json`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify(text) 
      });
  
      return { id, text, status }; 
    } catch (error) {
      console.error('Error updating todo:', error);
      throw error;
    }
  };


export const deleteTodo = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/todos/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
      },
    });
  };

  export const listenToTasks = (callback: (tasks: ITask[]) => void) => {
    const todosRef = ref(db, 'todos');
  
    const onDataUpdate = (snapshot: any) => {
      const todosData = snapshot.val();
      const todosList: ITask[] = todosData ? Object.values(todosData) : [];
      callback(todosList);
    };
  

    const unsubscribe = onValue(todosRef, onDataUpdate);
  

    return () => {
      off(todosRef, 'value', onDataUpdate);
    };
  };

  export const updateTaskStatus = async (id: string, newStatus: string): Promise<void> => {
    try {
      await fetch(`${baseURL}todos/${id}/status.json`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache',
        },
        body: JSON.stringify(newStatus),
      });
    } catch (error) {
      console.error('Error updating task status:', error);
      throw error;
    }
  };


