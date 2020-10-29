import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Task from './Task'
import Api from '../services/Api'

jest.mock('../services/Api')

describe(`views/<Task/>`, () => {
  beforeEach(jest.resetAllMocks)

  describe(`when save button has clicked`, () => {
    it(`should trigger api`, async () => {
      Api.createTask = jest.fn().mockImplementation(() => Promise.resolve())
      await act(async () => {
        const { container } = render(<Task/>)
        await fireEvent.change(
          container.querySelector(`[data-input='Name']`),
          { target: { value: 'Task Name' } }
        )
        await fireEvent.click(container.querySelector(`[data-trigger='Save']`))
        expect(Api.createTask).toHaveBeenCalled()
      })
    })

    xit(`should pass task name to api`, async () => {})
  })

  describe(`when api has callbacked`, () => {
    xit(`should show successful message`, async () => {})
  })
})
