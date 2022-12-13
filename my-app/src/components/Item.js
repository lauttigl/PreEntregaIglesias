import React from 'react'
import { products } from './ProductStock'
import Counter from './Counter';


// ESTE DEBE MOSTRAR EL ITEM DE FORMA INDIVIDUAL
// SI SE NAVEGA POR LAS RUTAS ANTERIORES HASTA EL /:ID (ID DE CUALQUIER PRODUCTO) MUESTRA ESTE COMPONENTE
export const Item = (props) => {
    const { product } = props;
    
    
    return (

<div className="card lg:card-side bg-base-100 shadow-xl">
<figure><img src={product.imageSrc} alt={product.imageAlt}/></figure>
    <div className="card-body" key={product.id}>
    <h2 className="card-title">{product.name}</h2>
    <p>{product.price}</p>
        <div className="card-actions justify-end">
        <Counter/>
            <div className="card-actions justify-end">
                
            <button className="btn btn-active" >Añadir al carrito</button>
        </div>
    </div>
</div>
</div>
    );
    };
