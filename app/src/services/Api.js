import axios from 'axios'

export default {
  createTask (task) {
    return axios.post(`/api/tasks`, task)
      .then(() => Promise.resolve())
  }
}
