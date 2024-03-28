import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://dummyjson.com',
})
export const requestProducts = async () => {
  const { data } = await instance.get('/products')
  return data
}
export const requestProductsByQuaery = async (quaery = '') => {
  const { data } = await instance.get(`/products/search?q=${quaery}`)
  return data
}
