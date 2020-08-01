//Create Home for LogIn

import React, { Component } from "react";
import {Link} from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavLogo from "../logo.svg";
import styled from "styled-components";
class NavBar extends Component{

   render(){

      return(
         <React.Fragment>
               <nav className="navbar navbar-expand-sm navbar-light bg-info">
                  {/* 
                        https://www.iconfinder.com/icons/1243689/call_phone_icon
                        Creative Commons (Attribution 3.0 Unported);
                        https://www.iconfinder.com/Makoto_msk 
                  */}
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                   </button>
                    <Link to="/">
                           <img src={NavLogo} className="navbar-brand"/>
                     </Link> 

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                           <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                                 <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                 </li>
                                 <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                          Product
                                    </Link>
                                 </li>
                           </ul>
                           <Link to="/cart" className="ml-auto">
                                 <button className="btn btn-outline-dark mr-5">
                                          <i className="fas fa-cart-plus"></i>
                                          <span className="ml-3">Cart</span>
                                 </button>
                           </Link>
                 </div>       
         </nav>            
         </React.Fragment>
      )
   }
}


export default NavBar;
