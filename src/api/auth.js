import client from './client'

export default {
  login: authInfo => {
    return new Promise((resolve, reject) => {
      client.post('/auth/user/login', authInfo)
        .then(res => resolve({token: res.data.token, userId: res.data.userId}))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  logout: token => {
    return new Promise((resolve, reject) => {
      client.delete('/auth/user/logout', { headers: { 'x-kbn-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
