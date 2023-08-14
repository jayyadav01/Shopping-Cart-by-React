import React, { useContext, useState } from 'react'
import { globalState } from './App';

function Product() {
    let product = [ 
                        { 
                            name : 'Item1',
                            type : 'cloth',
                            price : 100
                        },
                        { 
                            name : 'Item2',
                            type : 'electronic',
                            price : 500
                        },
                        { 
                            name : 'Item3',
                            type : 'furniture',
                            price : 200
                        }
                    
                ]
        
        const {cart,setcart,cost,setcost} = useContext(globalState); 

        function handlecart(e,data)
        {
            e.preventDefault();
            setcart([...cart,data])
            setcost(cost + data.price)
        }

  return (
    <>
        <div className='products'>
            <h1>Products</h1>
                {
                    product.map((data,index) => {
                        return (
                            <div className='productcontainer' key={index}>
                                <h3>{data.name}</h3>
                                <h3>{data.type}</h3>
                                <h3>$ {data.price}</h3>
                                <button onClick={(e) => handlecart(e,data)} className='add'>Add</button>
                            </div>
                        )
                    })
                }
        </div>
    </>
  )
}

export default Product
