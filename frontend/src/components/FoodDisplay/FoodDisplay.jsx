import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../context/StoreContext'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if(category==='All' || category===item.category) {
            return <FoodItem key={index} id={item.name} name={item.name} price={item.price} description={item.description} image={item.image} />
          }
        })}
      </div>
    </div>

  )
}

export default FoodDisplay        