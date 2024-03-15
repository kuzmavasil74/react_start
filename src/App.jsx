import { useEffect, useState } from 'react'
import DrinksCounter from './components/DrinksCounter/DrinksCounter'
import DrinksValues from './components/DrinksValues/DrinksValues'
// import MailBox from './components/MailBox/MailBox'

// import meestExpressUsers from './MeestExpres.json'
// import novaPoshtaUsers from './NewPost.json'
// import ukrPoshtaUsers from './UKRPost.json'
const initialDrinks = { beer: 0, whiskey: 0, wine: 0 }
function App() {
  const [drinks, setDrinks] = useState(() => {
    const stringifiedDrinks = localStorage.getItem('drinksValues')
    const parsedDrinks = JSON.parse(stringifiedDrinks) ?? initialDrinks
    return parsedDrinks
  })

  const [isVisableBar, setIsVisableBar] = useState(false)
  const handleLogDrink = (drinkName) => {
    if (drinks[drinkName] === 2 && drinkName === 'beer') {
      alert('Sorry, you exedded the beer limit. Please choose another drink!')
      return
    }
    setDrinks({ ...drinks, [drinkName]: drinks[drinkName] + 1 })
  }

  const handleResetDrinks = () => {
    setDrinks(initialDrinks)
  }

  const onToggleMiniBarVisibibity = () => {
    setIsVisableBar(!isVisableBar)
  }
  const drinksTotal = Object.values(drinks).reduce((acc, curr) => acc + curr, 0)

  useEffect(() => {
    localStorage.setItem('drinksValues', JSON.stringify(drinks))
  }, [drinks])

  return (
    <div>
      <button onClick={onToggleMiniBarVisibibity}>
        {isVisableBar ? 'Hide' : 'Show'} mini-bar
      </button>
      {isVisableBar && (
        <>
          <DrinksValues drinks={drinks} total={drinksTotal} />
          <DrinksCounter
            total={drinksTotal}
            handleResetDrinks={handleResetDrinks}
            onToggleMiniBarVisibibity={onToggleMiniBarVisibibity}
            handleLogDrink={handleLogDrink}
          />
        </>
      )}
    </div>
  )
}

export default App
