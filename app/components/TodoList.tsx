import { ITask } from "@/types/tasks"
import Tasks from "./Tasks"

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
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
      {tasks.map((task) => (
      <Tasks key={String(task.id)} task={task} />))}
      

    </tbody>
  </table>
</div>
  )
}

export default TodoList