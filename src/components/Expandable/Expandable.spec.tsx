import { render } from '@testing-library/react'

import Expandable from './Expandable'

describe('Expandable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Expandable />)
    expect(baseElement).toBeTruthy()
  })
})
