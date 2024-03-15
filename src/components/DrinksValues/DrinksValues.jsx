const DrinksValues = ({ drinks, total }) => {
  return (
    <ul>
      <li>Bear: {drinks.beer}</li>
      <li>Whiskey: {drinks.whiskey}</li>
      <li>Wine: {drinks.wine}</li>
      <li>
        Total: <b>{total}</b>
      </li>
    </ul>
  )
}

export default DrinksValues
