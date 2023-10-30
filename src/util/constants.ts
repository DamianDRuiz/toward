import { TodoList } from './types'
const DEFAULT_DATE: Date = new Date(2023, 11, 30, 0, 0, 0)
export const DEFAULT_TODOS: TodoList = [
  {
    id: 0,
    title: 'A Todo',
    description: 'Further details',
    completed: false,
    due: null,
  },
  {
    id: 1,
    title: 'Second Todo',
    description: null,
    completed: true,
    due: DEFAULT_DATE,
  },
]
