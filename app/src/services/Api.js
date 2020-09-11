import axios from 'axios'

export default {
  createTask (task) {
    return axios.post(`/tasks`, task)
      .then(() => Promise.resolve())
  }
}
