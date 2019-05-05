import axios from 'axios'

const baseURL = ''

const api = axios.create({
  baseURL
})

export const get = values => {
  console.log(values)
  return new Promise((resolve, reject) => 
    api.get(`/`, values)
      .then((res) => resolve(res))
      .catch((res) => reject(res)))
}