import { useEffect } from 'react'

const DrinksCounter = ({
  total,
  handleResetDrinks,
  onToggleMiniBarVisibibity,
  handleLogDrink,
}) => {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.code === 'Escape') {
        onToggleMiniBarVisibibity()
      }
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onToggleMiniBarVisibibity])

  return (
    <div>
      <button onClick={() => handleLogDrink('beer')}>🍺 beer</button>
      <button onClick={() => handleLogDrink('whiskey')}>🍻 whiskey</button>
      <button onClick={() => handleLogDrink('wine')}>🍷 wine</button>
      {total !== 0 && <button onClick={handleResetDrinks}>Reset</button>}
    </div>
  )
}

export default DrinksCounter
