import React from 'react'

export default function CartItem({item,value}) {
   
   const {id, title, img, count, price, total} = item;
   const {increment, decrement, removeItem} = value;
   return (
      <div className= "row my-2 text-capitalize text-center">
            <div className="col-10 col-lg-2 mx-auto">
                     <img src= {img} className="img-fluid" alt="product" style={{width:'5rem', height : '5rem'}}/>
            </div>
            <div className="col-10 col-lg-2 mx-auto align-items-center">
                     <span className="d-lg-none">product : </span>{title}
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                     <span >$ {price}</span>
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                     <div className="d-flex justify-content-center">
                           <span className="btn btn-outline-danger mx-1" onClick={() => decrement(id)}>-</span>
                           <span className=" mx-1 btn btn-outline-dark">{count}</span>
                           <span className="btn btn-outline-success mx-1" onClick={() => increment(id)}>+</span>
                     </div>       
            </div>
            <div className="col-10 col-lg-2 mx-auto">
                 <div className="cart-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-trash"></i>  
                  </div>    
            </div>
            <div className="col-10 col-lg-2 mx-auto my-2 my-lg-0">
                           <strong>Item total : $ {total}</strong>
            </div>
      </div>
   )
}
