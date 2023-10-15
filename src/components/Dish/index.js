import React from 'react'

const Dish = ({dish, handleIncrement, handleDecrement}) => (
  <div key={dish.id}>
    <h2>{dish.dish_name}</h2>
    <p>
      {dish.dish_currency} {dish.dish_price}
    </p>
    <p>{dish.dish_description}</p>
    <p>{dish.dish_calories} Calories</p>
    <img src={dish.dish_image} alt={dish.dish_name} />
    <button type="button" onClick={() => handleDecrement(dish)}>
      -
    </button>
    <span>{dish.quantity}</span>
    <button type="button" onClick={() => handleIncrement(dish)}>
      +
    </button>
    {dish.addonCat && <p>{dish.addonCat}</p>}
    {!dish.dish_Availability && <p>Not available</p>}
  </div>
)

export default Dish
