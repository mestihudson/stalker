import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Task from '@/views/Task'
import Api from '@/services/Api'

jest.mock('@/services/Api')

describe(`<Task/>`, () => {
  beforeEach(jest.resetAllMocks)

  const saveTask = async ({ name, api }) => {
    Api.createTask = api
    const { container } = render(<Task/>)
    await fireEvent.change(
      container.querySelector(`[data-input='Name']`),
      { target: { value: name } }
    )
    await fireEvent.click(container.querySelector(`[data-trigger='Save']`))
    return { container }
  }

  const apiPromiseResolve = () => {
    return jest.fn().mockImplementation(() => Promise.resolve())
  }

  const nameOfTask = () => 'Name of Task'

  it('should trigger api when save button has clicked', async () => {
    await act(async () => {
      const api = apiPromiseResolve()
      await saveTask({ api })
      expect(api).toHaveBeenCalled()
    })
  })

  it('should pass task name to api when save button has clicked', async () => {
    await act(async () => {
      const name = nameOfTask()
      const api = apiPromiseResolve()
      await saveTask({ name, api })
      expect(api).toHaveBeenCalledWith({ name })
    })
  })

  it('should show successful message when api callback', async () => {
    await act(async () => {
      const { container } = await saveTask({
        name: nameOfTask(), api: apiPromiseResolve()
      })
      expect(container.querySelectorAll(`[data-component='Alert']`))
        .toHaveLength(1)
    })
  })
})
