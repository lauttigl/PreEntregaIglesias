import React from 'react'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter, Routes , Route,  } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import {  ItemList } from './components/ItemList';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/cartContext';
import { initializeApp } from "firebase/app";
import CheckOut from './components/CheckOut';



const firebaseConfig = {
  apiKey: "AIzaSyB-8v1WT471goA1L8-oH-ccphTPB3-1izg",
  authDomain: "ecommerce-5984c.firebaseapp.com",
  projectId: "ecommerce-5984c",
  storageBucket: "ecommerce-5984c.appspot.com",
  messagingSenderId: "544430900670",
  appId: "1:544430900670:web:d30ed036215bf68e65a5ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);








export const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/' element={<ItemListContainer/>}/> 
    <Route path='/products/:id' element={<ItemList/>}/> 
    <Route path='/products/cart' element={<Cart/>}/>
    <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
    <Route path='/products/cart/checkout' element={<CheckOut/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
    
  )
}




export default App;
