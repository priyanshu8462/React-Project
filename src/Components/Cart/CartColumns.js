import React, { Component } from 'react'

export default class CartColumns extends Component {
   render() {
      return (
         <div className="container-fluid text-center d-none d-lg-block">
                  <div className="row mt-2">
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">products</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">name of product</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">price</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">quantity</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">remove</p>
                        </div>
                        <div className="col-10 col-lg-2 mx-auto">
                              <p className="text-uppercase">total</p>
                        </div>
                  </div>
         </div>
      )
   }
}
