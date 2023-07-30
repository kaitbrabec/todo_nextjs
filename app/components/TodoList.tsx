import { ITask } from "@/types/tasks"
import Tasks from "./Tasks"

interface TodoListProps {
  tasks: { [key: string]: ITask };
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
  const taskArray = Object.values(tasks);
  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
      
        <th>Tasks</th>
      
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {taskArray.map((task) => (
      <Tasks key={task.id} task={task} />))}
      

    </tbody>
  </table>
</div>
  )
}

export default TodoList