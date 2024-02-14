import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import Header from "../../components/Header/Header"
import Cart from './cart'

export default function index() {



  return (
    <>
    <Header />
         <Routes >
            <Route path='/'>
              <Route index element={<Home />} />
              <Route path ="cart" element={<Cart />} />
            </Route>
       </Routes>
    </>
  )
}
