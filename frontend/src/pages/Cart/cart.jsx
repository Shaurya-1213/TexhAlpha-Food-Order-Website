import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext'

const cart = () => {

  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  console.log(food_list);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quatity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.name] > 0) {
            return (
              <>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item.id)}>X</p>
              </div>
                <hr/>
                </>
                )
          }
        })}
      </div>
    </div>
  )
}

export default cart