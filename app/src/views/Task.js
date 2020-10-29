import { useState } from 'react'

import Api from '../services/Api'

function Task() {
  const [name, setName] = useState('')

  const handleNameChange = ({ target }) => {
    setName(target.value)
  }

  const handleSaveClick = () => {
    Api.createTask()
      .then(() => console.log())
  }

  return (
    <>
      <input type="text" data-input="Name" onChange={handleNameChange}/>
      <button data-trigger="Save" onClick={handleSaveClick}>Save</button>
    </>
  )
}

export default Task
