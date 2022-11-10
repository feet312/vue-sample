import axios from 'axios'

export default axios.create({
  baseURL: 'http://onm-apigw.sksignet.com:7800'
})
