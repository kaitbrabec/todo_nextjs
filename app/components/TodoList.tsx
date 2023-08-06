"use client";
import { ITask } from "@/types/tasks"
import Tasks from "./Tasks"
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase";
import { ref, onValue, off } from "firebase/database";

interface TodoListProps {
  tasks: ITask[]
}

// const mergeTasks = (initialTasks: ITask[] = [], realtimeTasks: ITask[]): ITask[] => {
//   console.log("initialTasks:", initialTasks);
//   console.log("realtimeTasks:", realtimeTasks);
  
  
//   const taskArray = Object.values(initialTasks);
//   const taskIds = new Set(taskArray.map((task) => task.id));
//   const filteredRealtimeTasks = realtimeTasks.filter((task) => !taskIds.has(task.id));
//   return [...taskArray, ...filteredRealtimeTasks];
// };

const TodoList: React.FC<TodoListProps> = ({ tasks: taskArray }) => {
  // const taskArray = Object.values(tasks);
  const [realtimeTasks, setRealtimeTasks] = useState<ITask[]>([]);
  useEffect(() => {
    const todosRef = ref(db, 'todos');

    const unsubscribe = onValue(todosRef, (snapshot) => {
      const todosData = snapshot.val();
      const todosList: ITask[] = todosData ? Object.values(todosData) : [];
      setRealtimeTasks(todosList);
    });

    return () => {
      const todosRef = ref(db, 'todos');
      off(todosRef); // Remove the listener when the component unmounts
    };
  }, []);

  // const mergedTasks: ITask[] = mergeTasks(taskArray, realtimeTasks);
  // console.log("mergedTasks:", mergedTasks);
  // const initialTasks = tasks ? Object.values(tasks) : [];
  // const mergedTasks = initialTasks.concat(realtimeTasks);
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr >
      
        <th>Tasks</th>
      
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* {mergedTasks.map((task) => (
      <Tasks key={task.id} task={task} />))} */}
      {/* Assign unique keys to each Tasks component */}     
      {realtimeTasks.map((task) => (
            <Tasks key={task.id} task={task} />
      
            ))}
            
    </tbody>
  </table>
</div>
  )
}

export default TodoList

