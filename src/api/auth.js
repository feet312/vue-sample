import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('http://onm-apigw.sksignet.com:7800/auth/user/login', authInfo)
        // .then(res => resolve({ token: res.data.token, userId: res.data.userId }))
        // .then(res => resolve({token: res.headers.Authorization, userId: res.data.userId}))
        .then(res => resolve({token: res.data.token, userId: res.data.userId}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      client.delete('/auth/logout', { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
