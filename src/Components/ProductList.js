import React, { Component } from "react";
import Product from './SingleProduct';
import Title from './title';
import {ProductConsumer} from "../Context";
class ProductList extends Component{
   
   render(){
      return(
         <div className="py-5">
            <div className="container">
               <Title name="Our" title="products"/>
               <div className="row">
                  <ProductConsumer>
                     {
                        value => {
                           return value.products.map(product => {
                              
                              return <Product key={product.id} product={product}/>
                           });
                        }
                     }
                  </ProductConsumer>
               </div>
            </div>
         </div>
         
      )
   }
}

export default ProductList;
