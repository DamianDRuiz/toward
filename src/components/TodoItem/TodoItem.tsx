import styles from './TodoItem.module.scss'

import { Todo, todoClickHandler } from 'src/util/types'

interface TodoItemProps extends Todo {
  handleTodoClick: todoClickHandler
}

function TodoItem({
  id,
  title,
  description,
  completed,
  due,
  handleTodoClick,
}: TodoItemProps) {
  return (
    <div
      className={`todoItem ${completed ? styles.completed : styles.incomplete}`}
    >
      <h2 onClick={(e) => handleTodoClick(e)} data-id={id}>
        {title}
      </h2>
      <p>{description}</p>
      <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
      <p>
        Due:{' '}
        {due
          ? `${due.getMonth() + 1}/${due.getDate()}/${due.getFullYear()}`
          : 'Whenever'}
      </p>
    </div>
  )
}

export default TodoItem
