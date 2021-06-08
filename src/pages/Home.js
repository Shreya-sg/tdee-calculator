import React from 'react';
import { Button } from 'reactstrap';
import '../App.css';
import { useState } from 'react';
import Header from '../partials/Header';

function Home(){
   const[name, setName] = useState('Home'); 
   const[count, setCount] = useState(0);
   const handleButtonClick = () => {
    setName('Stateful Home');
    setCount(count + 1);
    console.log(count);
   }

   //Tdee Calculator Functions 
   const [inputvalue, setInputvalue] = useState("");
   const changevalue = (e) => {
     setInputvalue(e.target.value);
   }
 
   const[age, setAge] = useState(0); 
   const[height, setHeight] = useState(0); 
   const[weight, setWeight] = useState(0);
   const[gender, setGender] = useState('male');  
   const[bmr, setBmr] = useState(0);  
  
  const handleAgeChange = (e) => {
    setAge(e.target.value); 
   }
   const handleWeightChange = (e) => {
    setWeight(e.target.value); 
  }
 
  const handleHeightChange = (e) => {
    setHeight(e.target.value);  
  }

  const handleGenderChange = (e) => {
    setGender(e.target.value);  
  }

  const handleTdeecalculation = () => {
      let bmr =(gender === 'male') ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age) : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
      setBmr(bmr.toFixed(2));
  }
  return (
    <>
    <Header/>
      <div class="jumbotron text-center">
          <h1>{name}</h1>
          <p> <Button color="primary" onClick ={handleButtonClick}>Set Names {count}</Button></p> 
            <h5>{inputvalue}</h5>
      </div>
      {/* <div class="container">
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
      </div> */}
      <div className="container" id="tdee-calculator">
        <div className="row">
          <h1>Tdee Calculator</h1>
          <h5>Enter Your Details</h5>
          <div className="calculator">
            <h1>Calculated Bmr : {bmr}</h1>
          </div>
          <form>
              {/* <div className="form-group">
                <label htmlfor="age">hello:</label>
                <input type="text" onChange={changevalue} className="form-control" />
                <h5>{inputvalue}</h5>
              </div> */}
              <div className="form-group">
                <label htmlfor="two-way">Twoway:</label>
                <input type="text" onChange={changevalue} className="form-control" value={inputvalue} />
               </div>
              <div className="form-group">
                <label htmlfor="age">Age:</label>
                <input type="number" onChange={(e) => {handleAgeChange(e)}} className="form-control" id="age" placeholder="Enter age" name="age" value={age}/>
              </div>
              <div className="form-group">
                <label htmlfor="pwd">Weight:</label>
                <input type="number" onChange={(e) => {handleWeightChange(e)}} className="form-control" id="weight" placeholder="Enter weight" name="weight" value={weight}/>
              </div>
              <div className="form-group">
                <label htmlfor="height">Height:</label>
                <input type="number" onChange={(e) => {handleHeightChange(e)}} className="form-control" id="height" placeholder="Enter height" name="height" value={height}/>
              </div>
              <div className="form-group">
                <label htmlfor="gender">Gender:</label>
                <select class="form-control" onChange={(e) => {handleGenderChange(e)}} id="gender"  name="gender" value={gender}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
              </div>
              <button type="submit" onClick={(e) => {handleTdeecalculation(e)}} className="btn btn-primary">Submit</button>
              </form>
        </div>
         
      </div>
    </>
  )
}

export default Home;