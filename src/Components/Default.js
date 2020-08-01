import React, { Component } from "react";

class Default extends Component{

   render(){

      return(
        <div className="container">
            <div className="row">
                  <div className="col-10 mx-auto text-title text-center text-uppercase p-5">
                      <h1 className="display-3"> 404 </h1>
                      <h1 className="display-3"> error</h1>
                      <h1 > page not found </h1>
                      <h3>the requested url <span className="text-danger">{this.props.location.pathname} </span>
                           is not found !!     
                      </h3>
                  </div>
            </div>
        </div>
      )
   }
}

export default Default;
