import { ChangeEvent, FormEvent, SetStateAction, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Expandable from '../Expandable/Expandable'
import styles from './TodoInput.module.scss'

interface TodoInputProps {
  input: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  descriptionInput: string
  onDescriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  due: Date
  setDue: React.Dispatch<SetStateAction<Date>>
  onSubmit: (e: FormEvent) => void
}

function TodoInput({
  input,
  onChange,
  descriptionInput,
  onDescriptionChange,
  due,
  setDue,
  onSubmit,
}: TodoInputProps) {
  const [expanded, setExpanded] = useState<boolean>(false)

  return (
    <div className={`${styles.container}`}>
      <h3>
        Add a Task
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="expandButton"
        >
          {expanded ? 'Simple' : 'Advanced'}
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
          <textarea
            onChange={onDescriptionChange}
            placeholder="Details..."
            value={descriptionInput}
          ></textarea>
          <DatePicker selected={due} onChange={(date: Date) => setDue(date)} />
        </Expandable>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default TodoInput
