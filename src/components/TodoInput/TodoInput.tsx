//import styles from './TodoInput.module.scss'

import { ChangeEvent, FormEvent } from 'react'

interface TodoInputProps {
  input: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (e: FormEvent) => void
}

function TodoInput({ input, onChange, onSubmit }: TodoInputProps) {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={onChange}
          value={input}
        />
      </form>
    </div>
  )
}

export default TodoInput
