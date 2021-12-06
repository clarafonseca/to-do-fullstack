import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
