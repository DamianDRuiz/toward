import { render } from '@testing-library/react'

import TodoListComponent from './TodoListComponent'

describe('TodoListComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoListComponent />)
    expect(baseElement).toBeTruthy()
  })
})
