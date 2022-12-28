import React from 'react'
import {  useCart } from '../context/cartContext'
import { CartContext } from '../context/cartContext'





export const Cart = () => {

    const { items, clearCart, removeItem, calculateTotal} = useCart()
    const total = calculateTotal();



    return (
        <>
        <div>Carrito de compras</div>
        {items.map(item => <div key={item.id}>
            <p>Producto: {item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price}</p>
            <p><button className='btn' onClick={() => removeItem(item.id)}> X </button></p>
        </div>)}
        <p>Total a pagar: ${total}</p>
        <button className='btn'onClick={clearCart}>Vaciar Carrito</button>
        </>
        
    )
    }
