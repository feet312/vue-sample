// import client from './client'
import axios from './axios'

export default {
  add: (token, { name, listId }) => {
    return new Promise((resolve, reject) => {
      // client.post(`/tasks/add`, { name, listId }, { headers: { 'x-onm-token': token } })
      axios.local.post(`/tasks/add`, { name, listId }, { headers: { 'x-onm-token': token } })
        .then(res => resolve(res.data))
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  update: (token, { id, name, description, listId }) => {
    return new Promise((resolve, reject) => {
      // client.put(`/tasks/${id}/update`, { name, description, listId }, { headers: { 'x-onm-token': token } })
      axios.local.put(`/tasks/${id}/update`, { name, description, listId }, { headers: { 'x-onm-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  remove: (token, { id, listId }) => {
    return new Promise((resolve, reject) => {
      // client.delete(`/tasks/${id}/remove`, { headers: { 'x-onm-token': token } })
      axios.local.delete(`/tasks/${id}/remove`, { headers: { 'x-onm-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  },

  move: (token, { id, from, to }) => {
    return new Promise((resolve, reject) => {
      // client.post(`/tasks/${id}/move`, { from, to }, { headers: { 'x-onm-token': token } })
      axios.local.post(`/tasks/${id}/move`, { from, to }, { headers: { 'x-onm-token': token } })
        .then(() => resolve())
        .catch(err => {
          reject(new Error(err.response.data.message || err.message))
        })
    })
  }
}
