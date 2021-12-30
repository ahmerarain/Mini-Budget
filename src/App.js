import './App.css';
import React from 'react'
import {BrowserRouter,
  Routes,
  Route} from "react-router-dom";
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      
      {/* <Route path="/home" exact element={<Header/> }/> */}
        <Route path="/" exact element={<ProductListing/>}/>
        <Route path="/product/:productId" exact element={<ProductDetail/>}/>
        <Route> 404 Not Found</Route>
        
      </Routes>
      </BrowserRouter>
  
    HEloo 
    </div>
  );
}

export default App;
