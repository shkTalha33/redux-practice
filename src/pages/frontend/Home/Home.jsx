import React, { useEffect, useState } from "react";
import {useDispatch} from "react-redux"
import { getAllProducts } from "../../../slices/productsSlice";
import ProductCards from "../../../components/ProductCards";

export default function Home() {

  const dispatch = useDispatch()
  const [allProducts, setAllProducts] = useState([])
    
    useEffect(() => {
      getProducts()
    }, [])

    const getProducts = async() => {
        const response = await dispatch(getAllProducts())
        setAllProducts(response.payload)
        
    }

    
    

  return (
   <div className=" w-[80vw]  md:w-[85vw] text-center m-auto ">
    <h1 className=" text-3xl md:text-4xl my-10 font-semibold text-gray-600">All Products </h1>
       <ProductCards products={allProducts} />
   </div>
  );
}
