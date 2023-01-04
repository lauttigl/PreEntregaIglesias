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
            const [product, setData] = useState([])
            // const {categoriaId} = useParams()

        useEffect(() => {
        getItems()
            
        }, [])

        const getItems = async () => {
            const dataBase= getFirestore()
            const document = doc(dataBase, 'items')
            const snapshot = await getDoc(document)
            setData(snapshot.doc.map(d => ({id:d.id, ...d.data()  } )))
        }
//         USA EL ID DEL PRODUCTO PARA TRAER EL PRODUCTO ESPECIFICO
            return (
            <div>
                <Item product={product}  />
                
        {/* <Item key={product.id} product={product} /> */}

            </div>
            );
        };
        
