import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/employee/ListEmployeeComponent';
import CreateEmployeeComponent from './components/employee/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/employee/ViewEmployeeComponent';
import ListProductComponent from './components/product/ListProductComponent';
import CreateProductComponent from './components/product/CreateProductComponent';
import ViewProductComponent from './components/product/ViewProductComponent';

function App() {
  return (
    <div>
        <Router>
                <div className="container">
                    <Switch>
                          
                    </Switch>
                    <Switch> 
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                    </Switch>
                </div>
                <div className="container">
                <Switch> 
                      <Route path = "/" exact component = {ListProductComponent}></Route>
                      <Route path = "/products" component = {ListProductComponent}></Route>
                      <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
                      <Route path = "/view-product/:id" component = {ViewProductComponent}></Route>
                </Switch>
            </div>
        </Router>
    </div>
    
  );
}

export default App;
