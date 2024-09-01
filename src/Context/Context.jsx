"use client"
import { createContext, useEffect, useState } from "react"
export const Context = createContext()



export default function AppWrapper({children}){

    const [productsData, setProductsData] = useState(null)
    

    const fetchdata = async()=>{
        try{
            const {products} = await fetch("https://dummyjson.com/products?populate=*").then((res)=>res.json())
            setProductsData(products)
        
        }catch(err){
            console.error("there was an error in fetching")
          }
    }
    useEffect(() => {
     fetchdata();
    }, [])
    
    return(
    <Context.Provider value={{productsData:productsData}}>
{children}
    </Context.Provider>
    )
}