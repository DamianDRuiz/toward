//import styles from './TodoItem.module.scss'

import { Todo } from 'src/util/types'

interface TodoItemProps extends Todo {
  handleTodoClick: (e: React.SyntheticEvent<HTMLHeadingElement>) => void
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
    <div>
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
