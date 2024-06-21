import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter' >
        <h1>Get Exclusive Offers on your e-mail</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your mail id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter