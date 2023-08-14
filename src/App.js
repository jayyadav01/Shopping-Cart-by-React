import React, { createContext, useState } from 'react'
import Header from './Header'
import './App.css'
import Product from './Product'
export const globalState = createContext({});

function App() {
    const [cart,setcart] = useState([]);
    const [cost,setcost] = useState(0);

    function handleDelete(e,item,index)
    {
        e.preventDefault();
        setcart(cart.filter((item,id) => id!=index))
        setcost(cost - item.price)
    }

  return (
    <>
        <globalState.Provider value={{cart,setcart,cost,setcost}}>
            <Header/>

            <div className='section'>
                <Product/>

                <div className='cart'>
                    <h1>Cart</h1>
                        {
                            cart.map((item,index) => {
                                return (
                                <div key={index} className='cartbox'>
                                    <h3>{item.name}</h3>
                                    <h3>{item.price}</h3>
                                    <button onClick={(e) => handleDelete(e,item,index)}>Remove</button>
                                </div>
                                )
                            })
                        }
                        
                </div>
            </div>
        </globalState.Provider>
    </>
  )
}

export default App
