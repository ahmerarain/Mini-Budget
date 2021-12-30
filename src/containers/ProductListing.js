import React,{useEffect} from 'react'
import axios from 'axios';
import { useSelector ,useDispatch} from 'react-redux'
import ProductComponent from './ProductComponent'
import { setProducts } from './../redux/actions/productActions';
 const ProductListing = () => {
     const products = useSelector(state =>state)
     const  dispatch = useDispatch()
     console.log(products);


     const fetchProducts=async()=>{
         const response = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
             console.log("Error",err)
         });
         dispatch(setProducts(response.data));
     }
console.log("products",products)
     useEffect(() => {
         fetchProducts();
         
     }, [])
    return (
        <div className=" columns  ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductListing;