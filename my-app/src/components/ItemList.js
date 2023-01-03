import React from 'react'
import {useState, useEffect,} from 'react'
import { Item } from './Item'
import { useFetcher, useParams } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import {getFirestore, doc, getDoc, collection, getDocs, query, where} from 'firebase/firestore'





// AL CLICKEAR EN VER PRODUCTO DE ITEMLISTCONTAINER NOS TRAE ACA Y MUESTRA ESTE COMPONENTE
// ESTE COMPONENTE TRAE EL ID DEL PRODUCTO PARA IDENTIFICARLO Y MUESTRA A <ITEM/>
    export const ItemList = () => {
            //ESTO ES CON FIREBASE
            const [data, setData] = useState([])
            const {categoriaId} = useParams()

        useEffect(() => {
            const dataBase= getFirestore()
            const collectionRef = collection (dataBase, 'items')
            if (categoriaId){
            const queryFilter = query(collectionRef, where('category', '==', 'categoriaId'))
            getDocs(queryFilter)
                .then(res=> setData(res.docs.map(product =>  ({id:product.id, ...product.data()  } ))))
            } else {
            getDocs(collectionRef)
            .then(res=> setData(res.docs.map(product =>  ({id:product.id, ...product.data()  } ))))
            }
        }, [categoriaId])

//         USA EL ID DEL PRODUCTO PARA TRAER EL PRODUCTO ESPECIFICO
            return (
            <div>
                <Item product={data}  />
            </div>
            );
        };
        
