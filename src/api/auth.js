// import client from './client'
import axios from './axios'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      // client.post('http://onm-apigw.sksignet.com:7800/auth/user/login', authInfo)
      axios.apigw.post('/auth/user/login', authInfo)
        .then(res => resolve({token: res.data.token, userId: res.data.userId}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      // client.delete('/auth/logout', { headers: { 'x-kbn-token': token } })
      axios.local.delete('/auth/logout', { headers: { 'x-onm-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
