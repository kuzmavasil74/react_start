import ProductListItem from '../ProductListItem/ProductListItem'

const ProductList = ({ products }) => {
  return (
    <ul>
      {Array.isArray(products) &&
        products.map(
          ({
            id,
            title,
            thumbnail,
            brand,
            description,
            price,
            rating,
            stock,
            discountPercentage,
          }) => {
            return (
              <ProductListItem
                key={id}
                title={title}
                thumbnail={thumbnail}
                brand={brand}
                description={description}
                price={price}
                rating={rating}
                stock={stock}
                discountPercentage={discountPercentage}
              />
            )
          }
        )}
    </ul>
  )
}

export default ProductList
