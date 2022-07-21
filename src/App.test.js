import {render} from '@testing-library/react'
import { expect, it } from 'vitest'

it('renders correctly', () => {
  const {result} = render();
  expect(result).toMatchSnapshot()
})
