import React from 'react'
import Counter from './Counter';
import { useCart } from '../context/cartContext';
import {getFirestore, doc, getDoc, collection, getDocs,} from 'firebase/firestore'
import { useEffect, useState , useParams} from 'react';




// ESTE DEBE MOSTRAR EL ITEM DE FORMA INDIVIDUAL
// SI SE NAVEGA POR LAS RUTAS ANTERIORES HASTA EL /:ID (ID DE CUALQUIER PRODUCTO) MUESTRA ESTE COMPONENTE
export const Item = (props) => {
    // ESTA FUNCION SERVIA SIN FIREBASE 
    const { product } = props;
    // const {categoriaId} = useParams()
    // const [product, setProduct] = useState({})
    const {addToCart} = useCart()


    // useEffect(() => {
    //     const dataBase= getFirestore()
    //     const collectionRef = collection (dataBase, 'items')
    //     getDocs(collectionRef)
    //     .then((res) => setProduct(res.docs.map((product) => ({ id: product.id, ...product.data() }))));
    // }, []);


    const addHandler = (qty) => { 
        
        const newProduct ={
            ...product,
            quantity: qty
        }
        addToCart(newProduct)
    }

    return (

<div className="card lg:card-compact bg-base-100 shadow-xl">
<figure><img className='object-scale-down h-80 w-80 'src={product.image} alt={product.imageAlt}/></figure>
    <div className="card-body place-items-center" key={product.id}>
    <h2 className="card-title">{product.name}</h2>
    <p className='text-lg'>Precio: ${product.price}</p>
    <p className='text-lg'>En Stock: {product.stock} unidades </p>
    <Counter initial={0} stock={product.stock} onAdd={addHandler}/>
</div>
</div>
    );
    };
