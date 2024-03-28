import { useEffect, useState } from 'react'
import { requestProducts, requestProductsByQuaery } from './services/api'
import Loader from './components/Loader/Loader'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import ProductList from './components/ProductList/ProductList'
import SearchForm from './components/SearchForm/SearchForm'

const AppWithHTTPRequests = () => {
  const [products, setProducts] = useState(null)
  const [isloading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [quaery, setQuaery] = useState('')
  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true)
        const data = await requestProducts()
        setProducts(data.products)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])
  useEffect(() => {
    if (quaery.length === 0) return

    async function fetchProductsByQuaery() {
      try {
        setIsLoading(true)
        const data = await requestProductsByQuaery(quaery)
        setProducts(data.products)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProductsByQuaery()
  }, [quaery])
  const onSetSerchQuaery = (SearchTerm) => {
    setQuaery(SearchTerm)
  }
  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <SearchForm onSetSerchQuaery={onSetSerchQuaery} />
      {isloading && <Loader />}
      {isError && <ErrorMessage />}
      {products && <ProductList products={products} />}
    </div>
  )
}

export default AppWithHTTPRequests
