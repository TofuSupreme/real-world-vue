import axios from 'axios'
const apiClient = axios.create({
  //This is a Single Axios instance for our app
  baseURL: 'https://my-json-server.typicode.com/TofuSupreme/rwv-db/', // Base URL for all calls to use
  withCredentials: false,
  heaaders: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
}
