import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import Task from './Task'
import Api from '../services/Api'

jest.mock('../services/Api')

describe(`views/<Task/>`, () => {
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

  const nameOfTask = () => 'Task Name'

  const thereAre = ({ container }, quantity) => {
    expect(container.querySelectorAll(`[data-component='Alert']`))
      .toHaveLength(quantity)
  }

  describe(`when save button has clicked`, () => {
    it(`should trigger api`, async () => {
      await act(async () => {
        const api = apiPromiseResolve()
        await saveTask({ api })
        expect(api).toHaveBeenCalled()
      })
    })

    it(`should pass task name to api`, async () => {
      await act(async () => {
        const name = nameOfTask()
        const api = apiPromiseResolve()
        await saveTask({ name, api })
        expect(api).toHaveBeenCalledWith({ name })
      })
    })
  })

  describe(`when api has callbacked`, () => {
    it(`should show successful message`, async () => {
      await act(async () => {
        thereAre(await render(<Task />), 0)
        const { container } = await saveTask({
          name: nameOfTask(), api: apiPromiseResolve()
        })
        thereAre({ container }, 1)
      })
    })
  })
})
