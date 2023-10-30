import { useState } from 'react'
import Expandable from '../Expandable/Expandable'
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
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div
      className={`todoItem ${styles.container} ${
        completed ? styles.completed : styles.incomplete
      }`}
    >
      <h2 onClick={(e) => handleTodoClick(e)} data-id={id}>
        {title}
      </h2>
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="expandButton"
      >
        {expanded ? 'Collapse' : 'Expand'}
      </button>
      <Expandable expanded={expanded}>
        <p>{description}</p>
        <p>Status: {completed ? 'Completed' : 'Not Completed'}</p>
        <p>
          Due:{' '}
          {due
            ? `${due.getMonth() + 1}/${due.getDate()}/${due.getFullYear()}`
            : 'Whenever'}
        </p>
      </Expandable>
    </div>
  )
}

export default TodoItem
