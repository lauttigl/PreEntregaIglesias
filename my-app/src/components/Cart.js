import React from 'react'
import {  useCart } from '../context/cartContext'
import { CartContext } from '../context/cartContext'





export const Cart = () => {

    const { items, clearCart, removeItem, calculateTotal} = useCart()
    const total = calculateTotal();



    return (
        
        <div className='border-2 gray-300 '>
                <h1 className='text-2xl text-center '>Estas por comprar</h1>
                {items.map(item => <div key={item.id} className=' p-2 text-center grid grid-cols-5 border-2 max-w-full'>
                            <p className='col-start-1'>Producto: {item.name}</p>
                            <p className='col-start-2'>Cantidad: {item.quantity}</p>
                            <p className='col-start-3'>Precio: ${item.price}</p>
                            <button className='btn btn-circle bg-red-600 rounded-md col-start-4' onClick={() => removeItem(item.id)}> X </button>
                            </div>)}
                            <div className='text-center'>
                            <h3 className='text-2xl font-bold '>Total a pagar: ${total}</h3>
                                <button className='btn bg-green-600 m-6 '>Finalizar compra</button>
                                <button className='btn bg-red-600'onClick={clearCart}>Vaciar Carrito</button>
                                </div>
                    </div>
        
    )
    }



    