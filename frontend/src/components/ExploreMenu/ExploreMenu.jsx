import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo animi nemo adipisci quod minima iusto! Doloremque quaerat temporibus nam quo earum, fugiat quia culpa?</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div className='explore-menu-list-item' key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu