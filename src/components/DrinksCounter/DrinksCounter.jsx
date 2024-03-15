const DrinksCounter = ({ handleLogDrink }) => {
  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>🍺 beer</button>
      <button onClick={() => handleLogDrink('whiskey')}>🍻 whiskey</button>
      <button onClick={() => handleLogDrink('wine')}>🍷 wine</button>
    </div>
  )
}

export default DrinksCounter
