import React from 'react'
import './header.css'

const header = () => {
  return (
    <div className='header' id='header'>
      <img src="./header-1.webp" alt="" className='main-image' />
    <div className="header-contents">
      <h2>Order here</h2>
      <button>View Menu</button>
    </div>
    </div>
  )
}

export default header