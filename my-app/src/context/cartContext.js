import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'


const CartContext = React.createContext({
    items: [],
    addToCart : () => {},
    clearCart : () => {},
})


const useCart = () => {
    return useContext(CartContext)
}


const CartContextProvider = ({children}) => {
    
    const [items, setItems] = useState([]);


    const addToCart = ( item ) => { 
        console.log(item)
        const productToAdd = inCart(item.id)

        if(productToAdd) {
            productToAdd.quantity = item.quantity
            setItems([...items])
        } else {
            setItems( items => items.concat(item))
        }
    }
    

    const inCart = (id) => items.find(product => product.id == id);


    const totalProductosCarrito = () => {
        return items.reduce((acc, products) => acc + products.cantidad, 0)
    }
    
    const totalPrecioCarrito = () => { 
        return items.reduce((acc, products) => acc + products.cantidad * products.price, 0)
    }

    const removeItem = ({id}) => setItems(setItems.filter(product => product.id !==id));
    

    const clearCart = () => { 
        setItems( [] )
    }


    const context = {
        items: items,
        addToCart : addToCart,
        clearCart : clearCart,
        inCart : inCart,
        removeItem : removeItem,
        totalPrecioCarrito: totalPrecioCarrito,
        totalProductosCarrito: totalProductosCarrito
    }



    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
    
    }  
export { CartContextProvider, useCart, CartContext}
    
