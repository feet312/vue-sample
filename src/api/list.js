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
  }
}
