import React from 'react'
import './Offers.css'
import exclusive_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers' >
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you!</h1>
            <p>ONLY ON BEST SELLERS.</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right"></div>
        <img src={exclusive_img} alt="" />
    </div>
  )
}

export default Offers