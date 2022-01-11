import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const configuration: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_URL, //REACT_APP_API_URL="https://pokeapi.co/api/v2"
  timeout: 10000,
}

const client: AxiosInstance = axios.create(configuration)

client.defaults.headers['Content-Type'] = 'application/json'

export default client
