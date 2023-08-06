"use client";
import { ITask } from "@/types/tasks";
import { FormEventHandler, useState, useEffect } from "react";
import { FiEdit, FiTrash2} from "react-icons/fi";
import Modal from "./Modal";
import { editTodo, deleteTodo } from "@/api";


interface TaskProps {
    task: ITask
}

const Tasks: React.FC<TaskProps> = ({ task }) => {
  
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDeleted, setOpenModalDeleted] = useState<boolean>(false);
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text);
  useEffect(() => {
    setTaskToEdit(task.text); // Update the taskToEdit state when the task prop changes
  }, [task]);
  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit
    })
    
    setOpenModalEdit(false);
  
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id);
    setOpenModalDeleted(false);
  
  }

  return (
    <tr key={task.id}>
    <td className="w-full">{task.text}</td>
    <td className="flex gap-5">
      <FiEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
      <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}> 
        <form onSubmit={handleSubmitEditTodo} >
          <h3 className='font-bold text-lg'>Edit Task</h3>
          <div className='modal-action'>
          <input 
            value={taskToEdit}
            onChange={e => setTaskToEdit(e.target.value)} 
            type="text" 
            placeholder="Type here" 
            className="input input-bordered w-full" 
          />
          <button type='submit' className='btn'>Submit</button>
          </div>
        </form>
      </Modal>
      <FiTrash2 onClick={() => setOpenModalDeleted(true)} cursor="pointer" className="text-red-500" size={25}/>
      <Modal modalOpen={openModalDeleted} setModalOpen={setOpenModalDeleted}> 
       <h3 className="text-lg">Are you sure you want to delete?</h3>
       <div className="modal-action">
        <button onClick={() => handleDeleteTask(task.id)} className="btn">Yes</button>
       </div>
      </Modal>
    </td>
    </tr>
  )
}

export default Tasks

console.log("Tasks:", Tasks);