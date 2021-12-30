import React,{useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct ,removeSelectedProduct} from '../redux/actions/productActions';
const ProductDetail = () => {
    const product=useSelector((state)=>state.product);
    const {image,title,price,category,description}=product;
    const {productId} =useParams();
    const  dispatch = useDispatch();
    const fetchProductDetail=async()=>{
        const  response= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch(error =>{
            console.log("error",error)
        });
        dispatch(selectedProduct(response.data));
    
  
    }
    useEffect(() => {
        if(productId && productId !== "" ) fetchProductDetail();
        return () => {
            dispatch(removeSelectedProduct());
          };
       }, [productId])
       return (
     <div style={{width:"80%",height:"80%",padding:"30px",margin:"auto"}}>
          <div className="ui grid container">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <div className="ui placeholder segment">
              <div className="ui two column stackable  aligned grid">
             
                <div className=" aligned row">
                  <div className="column lp">
                    <img className="ui medium image" src={image} />
                  </div>
                  
                  <div className="column rp">
                  <h3 className="ui brown  header">{category}</h3>
                    <h1>{title}</h1>
                    <h2>
                      <a className="ui teal tag label">${price}</a>
                    </h2>
                  
                    <p>{description}</p>
                    <div className="ui vertical animated button" tabIndex="0">
                      <div className="hidden content">
                        <i className="shop icon"></i>
                      </div>
                      <div className="visible content">Add to Cart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
     </div>
      );
}

export default ProductDetail;
