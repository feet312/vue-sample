import axios from 'axios'

const local = axios.create({baseURL: 'http://onm-fo.sksignet.com:8082'})
const apigw = axios.create({baseURL: 'http://onm-apigw.sksignet.com:7800'})

export default {
  local,
  apigw
}
