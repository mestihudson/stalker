import axios from 'axios'

const Api = {
  createTask (task) {
    return axios.post(`/tasks`, task)
      .then(({ data }) => Promise.resolve(data))
  }
}

export default Api
