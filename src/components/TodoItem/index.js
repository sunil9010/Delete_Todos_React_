// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, onDelete} = props
  const {id, title} = todoDetails
  const Delete = () => {
    onDelete(id)
  }
  return (
    <li className="todo-item">
      <p className="description">{title}</p>
      <button type="button" className="btnElement" onClick={Delete}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
