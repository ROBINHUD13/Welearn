import React from 'react';
import Navbar from './components/Navbar';
import Rj  from './components/Rj';
import New  from './components/New';
import New2  from './components/New2';
import Car1  from './components/Car1';
import Car2  from './components/Car2';
import Footer from './components/Footer';

import './App.css'; // Import the CSS fil


function App() {
  return (
    <>
    
      <Navbar />
       <Rj/>
       <New/>
       <New2/>
       <Car1/>
       <Car2/>
       <Footer/>

    </>
  );
}


export default App;
