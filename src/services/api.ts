import axios from 'axios'

export const api = axios.create({
  baseURL: 'localhost:3001/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})
