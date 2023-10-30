import { act, renderHook } from '@testing-library/react'
import * as React from 'react'

import useTodos from './useTodos'

describe('useTodos', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useTodos())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
