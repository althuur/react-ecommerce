import React from 'react';
import{Switch, Route} from 'react-router-dom';


import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';

function Home() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route path="/Details" component={Details}/>
        <Route path="/Cart" component={Cart}/>
        <Route component={Default}/>
        <Route path="/" component={ProductList}/>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default Home;
