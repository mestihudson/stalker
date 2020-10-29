import { useState } from 'react'

import Api from '../services/Api'

function Task() {
  const [name, setName] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const handleNameChange = ({ target }) => {
    setName(target.value)
  }

  const handleSaveClick = () => {
    Api.createTask({ name })
      .then(() => {
        setShowMessage(true)
        setMessage(`Task successful created.`)
      })
  }

  return (
    <>
      <input type="text" data-input="Name" onChange={handleNameChange}/>
      <button data-trigger="Save" onClick={handleSaveClick}>Save</button>
      { showMessage && <span data-component="Alert">{ message }</span> }
    </>
  )
}

export default Task
