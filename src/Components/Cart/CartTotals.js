import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({value}) {
   const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
   return (
      <React.Fragment>
            <div className="container">
               <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-center">
                     <Link to ="/">
                        <button className="btn btn-outline-danger mb-3 px-5 text-uppercase" type="button" onClick={() => clearCart() }>
                                 clear cart
                        </button>
                     </Link>
                     <h5>
                        <span className="text-title">sub-total : $</span>
                        <strong>{cartSubTotal}</strong>
                        <br/>
                        <span className="text-title">tax : $</span>
                        <strong>{cartTax}</strong>
                        <br/>
                        <span className="text-title">total : $</span>
                        <strong>{cartTotal}</strong>
                     </h5>
               </div>
            </div>
      </React.Fragment>
   )
}
