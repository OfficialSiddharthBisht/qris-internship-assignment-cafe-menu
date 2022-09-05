import './App.css';
import React from 'react';
import {Routes ,Route} from 'react-router-dom';
// components import
import Navbar from './components/Navbar';
import Home from './components/Home';
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'

function App() {
  return ( 
    
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}></Route>
        <Route path = "/breakfast" element = {<Breakfast/>}></Route>
        <Route path = "/lunch" element = {<Lunch/>}></Route>
        <Route path = "/dinner" element = {<Dinner/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
