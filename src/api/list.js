// import client from './client'
import axios from './axios'

export default {
  fetch: token => {
    return new Promise((resolve, reject) => {
      // client.get('/lists', { headers: { 'x-onm-token': token } })
      axios.local.get('/lists', { headers: { 'x-onm-token': token } })
        .then(res => resolve({ lists: res.data.lists }))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },
  getUser: token => {
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line standard/object-curly-even-spacing
      axios.apigw.get('/ba/users/INSOFT1', { headers: { 'Authorization': token } })
        // eslint-disable-next-line standard/object-curly-even-spacing
        .then(res => resolve({ userData: res.data.data}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
