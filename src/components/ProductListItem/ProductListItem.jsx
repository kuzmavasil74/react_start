const ProductListItem = ({
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
    <li key={id}>
      <img width={250} src={thumbnail} alt={title} />
      <h2>Title: {title}</h2>
      <h3>
        Brand: <b>{brand}</b>
      </h3>
      <p>
        Description: <b>{description}</b>
      </p>
      <h4>
        Price: <b>{price}</b>
      </h4>
      <h4>
        Rating: <b>{rating}</b>
      </h4>
      <h4>Stock: {stock}</h4>
      <h4>Discount: {discountPercentage}</h4>
    </li>
  )
}

export default ProductListItem
