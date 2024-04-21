import React from 'react'
import { render } from '@testing-library/react'
import Surveys from '@/app/(auth)/surveys/page'

describe('Surveys', () => {
  it('should have render', () => {
    render(<Surveys />)
  })
})
