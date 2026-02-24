import { useEffect,useRef,useState } from "react";
import Product from "./Product";


export default function ProductList() {
    const [products,setProducts]= useState([]);
    const [load,setLoad]= useState (false);

function handleLoadProduct(){   
    setLoad (true);
}
    useEffect(()=>{
        async function fetchProducts(){
            const response = await fetch("./product.json");
            const data = await response.json();
            setProducts(data);
        }
        console.log("useEffect called");
        if (load){
         
            fetchProducts();
        }
        },[load])
    return(
        <>
        <h1>Product List</h1>
        <button onClick={handleLoadProduct}>Load Product</button>
      {products.map((product) => (
       <Product key={product.id} product={product} />
      ))}
        </>
    )
}