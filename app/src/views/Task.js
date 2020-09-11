import React, { useState } from 'react'

import Api from '../services/Api'

export default function Task() {
  const [name, setName] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState('')

  const handleSaveClick = () => {
    Api.createTask({ name })
      .then(() => {
        setShowMessage(true)
        setMessage(`Task successful created.`)
      })
  }

  const handleNameChange = ({ target }) => {
    setName(target.value)
  }

  return (
    <>
      <input type="text" data-input="Name" onChange={handleNameChange}/>
      <button data-trigger="Save" onClick={handleSaveClick}>Salvar</button>
      { showMessage && <span data-component="Alert">{ message }</span> }
    </>
  )
}

