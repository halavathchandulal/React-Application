import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import MenuCategories from './components/MenuCategories'
import Dish from './components/Dish'
import './App.css' // Add CSS as needed

const API_URL = 'https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099'

const App = () => {
  const [menuCategories, setMenuCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState('')
  const [dishes, setDishes] = useState([])
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    axios
      .get(API_URL)
      .then(response => {
        setMenuCategories(response.data.table_menu_list)
        setActiveCategory(response.data.table_menu_list[0])
        setDishes(response.data.category_dishes)
      })
      .catch(error => console.error('Error fetching data:', error))
  }, [])

  const handleCategoryChange = category => {
    setActiveCategory(category)
    // For simplicity, just log the selected category
    console.log('Selected category:', category)
  }

  const handleIncrement = dish => {
    const updatedDishes = dishes.map(item =>
      item.id === dish.id ? {...item, quantity: item.quantity + 1} : item,
    )
    setDishes(updatedDishes)
    setCartCount(prevCount => prevCount + 1)
  }

  const handleDecrement = dish => {
    if (dish.quantity > 0) {
      const updatedDishes = dishes.map(item =>
        item.id === dish.id ? {...item, quantity: item.quantity - 1} : item,
      )
      setDishes(updatedDishes)
      setCartCount(prevCount => prevCount - 1)
    }
  }

  return (
    <div>
      <Header restaurantName="UNI Resto Cafe" />

      <MenuCategories
        categories={menuCategories}
        handleCategoryChange={handleCategoryChange}
      />
      {dishes.map(dish => {
        if (dish.menu_category === activeCategory.menu_category) {
          return (
            <Dish
              key={dish.id}
              dish={dish}
              handleIncrement={() => handleIncrement(dish)}
              handleDecrement={() => handleDecrement(dish)}
            />
          )
        }
        return null
      })}
      <p>Total Cart Count: {cartCount}</p>
    </div>
  )
}

export default App
