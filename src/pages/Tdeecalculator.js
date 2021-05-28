import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import { useState } from 'react';
import Header from '../partials/Header';

function Calse(){
   const[name, setName] = useState('Calse'); 
   const[count, setCount] = useState(0);
   const handleButtonClick = () => {
    setName('Stateful Calse');
    setCount(count + 1);
    console.log(count);
   }
  return (
    <>
    <Header/>
      <div class="jumbotron text-center">
          <h1>{name}</h1>
          <p> <Button color="primary" onClick ={handleButtonClick}>Set Names {count}</Button></p> 
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4">
            <h3>Column 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
          <div class="col-sm-4">
            <h3>Column 3</h3>        
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calse;