//import styles from './TodoItem.module.scss'

import { Todo } from 'src/types'

interface TodoItemProps extends Todo {}

function TodoItem({ title, description, completed, due }: TodoItemProps) {
  return (
    <div>
      <h2>{title}</h2>
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
