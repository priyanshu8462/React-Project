import React, { Component } from "react";
import {ProductConsumer} from "../Context";
import { Link } from 'react-router-dom';
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
class Details extends Component{

   render(){

      return(
        <ProductConsumer>
            {
               value => {
                  console.log(value);
                  const {id, company, img, info, price, title, inCart}= value.detailProduct;
                  
                  return(

                        <div className="container py-5">
                              <div className="row justify-content-center">
                                                   {/* title */}
                                    <div className="col-10 mx-auto text-center">
                                          <h1>{title}</h1>
                                    </div>
                                                {/* end of title */}

                                                {/* {Product info} */}
                                    <div className="row">
                                          <div className="col-10 col-md-6 my-3">
                                                   <img src={img} alt="product image" className="img-fluid"/>
                                          </div>
                                          <div className="col-10 col-md-6 my-3 text-capitalize">
                                                   <h2>model : {title}</h2>
                                                   <h4 className="text-uppercase mb-2 mt-3 text-title text-muted">
                                                            made by : <span> {company}</span>
                                                   </h4>
                                                   <h4>
                                                      <strong>
                                                            price : <span>$</span>{price}
                                                      </strong>
                                                   </h4>
                                                   <p className="text-capitalize mt-3 line-spacing-2 text-muted">
                                                      {info}
                                                   </p>
                                                                  {/* buttons */}
                                                   <div className="mt-5">
                                                      <Link to="/">
                                                      <button type="button" className="btn btn-outline-primary text-capitalize">back to products</button>
                                                      </Link>

                                                      <Link to="/cart">
                                                      <button type="button" className="btn btn-outline-warning text-capitalize ml-5"
                                                       disabled={inCart ? true : false}
                                                       onClick = {() => {
                                                          value.addToCart(id);
                                                           value.openModal()
                                                       }}>
                                                         {inCart ? 'in cart':'add to cart'}
                                                      </button>
                                                      </Link>

                                                   </div>   
                                          </div>
                                    </div>
                              </div>
                              

                        </div>

                  )
               }
            }
        </ProductConsumer>
      )
   }
}

export default Details;
