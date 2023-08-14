import React, { useContext } from 'react'
import { globalState } from './App'

function Header() {
    const {cart,cost} = useContext(globalState);
    console.log(cart);
  return (
    <>
        <div className='header'>
            <h1>Shopping Cart</h1>
            <h3>Total Item : {cart.length}</h3>
            <h3>Total Cost : {cost}</h3>
        </div>
    </>
  )
}

export default Header
