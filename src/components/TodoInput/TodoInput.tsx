import { ChangeEvent, FormEvent, useState } from 'react'
import Expandable from '../Expandable/Expandable'

import styles from './TodoInput.module.scss'

interface TodoInputProps {
  input: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
}

function TodoInput({ input, onChange, onSubmit }: TodoInputProps) {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div className={`${styles.container}`}>
      <h3>
        Add a Task
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="expandButton"
        >
          {expanded ? 'Less' : 'More'}
        </button>
      </h3>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Task..."
          onChange={onChange}
          value={input}
        />
        <Expandable expanded={expanded}>
          <textarea placeholder="Details..."></textarea>
        </Expandable>
      </form>
    </div>
  )
}

export default TodoInput
