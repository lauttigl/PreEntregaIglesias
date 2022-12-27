import React from 'react'
import {  useCart } from '../context/cartContext'
import { CartContext } from '../context/cartContext'





export const Cart = () => {

    const { items, clearCart, removeItem} = useCart()
    


    return (
        <>
        <div>Cart</div>
        {items.map(item => <div key={item.id}>
            <p>Producto: {item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>{item.price}</p>
            <p><button classname='btn' onClick={() => removeItem(item.id)}> borrar item</button></p>
        </div>)}
        <button className='btn'onClick={clearCart}>Vaciar Carrito</button>
        </>
        
    )
    }
