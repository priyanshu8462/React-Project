import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Details from './Components/details';
import NavBar from './Components/NavBar';
import ProductList from './Components/ProductList';
import Modal from './Components/Modal';

function App() {
  return (
      <React.Fragment>
          <NavBar/>
          <Switch>
              <Route exact path="/" component={ProductList}/>
              <Route path="/details" component={Details}/>
              <Route path="/cart" component={Cart}/>
              <Route  component={Default}/>
          </Switch>
          <Modal/>
     </React.Fragment>
    );
}

export default App;
