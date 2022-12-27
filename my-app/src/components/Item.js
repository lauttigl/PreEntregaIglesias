import React from 'react'
import Counter from './Counter';
import { useCart } from '../context/cartContext';




// ESTE DEBE MOSTRAR EL ITEM DE FORMA INDIVIDUAL
// SI SE NAVEGA POR LAS RUTAS ANTERIORES HASTA EL /:ID (ID DE CUALQUIER PRODUCTO) MUESTRA ESTE COMPONENTE
export const Item = (props) => {
    const { product } = props;
    const {addToCart} = useCart()

    const addHandler = (qty) => { 
        
        const newProduct ={
            ...product,
            quantity: qty
        }
        addToCart(newProduct)
    }

    return (

<div className="card lg:card-compact bg-base-100 shadow-xl">
<figure><img className='object-scale-down h-80 w-80 'src={product.imageSrc} alt={product.imageAlt}/></figure>
    <div className="card-body place-items-center" key={product.id}>
    <h2 className="card-title">{product.name}</h2>
    <p className='text-lg'>{product.price}</p>
    <p className='text-lg'>En Stock: {product.stock} unidades </p>
    <Counter initial={0} stock={product.stock} onAdd={addHandler}/>
    {/* <p><button  className="btn btn-active" onClick={addHandler} disabled={product.stock <= 0} >Añadir al carrito</button></p> */}
</div>
</div>
    );
    };
