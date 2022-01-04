import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const configuaration: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
}

const client: AxiosInstance = axios.create(configuaration)

client.defaults.headers['Content-type'] = 'application/json'

export default client
