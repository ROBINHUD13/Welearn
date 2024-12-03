import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom" 
import './App.css'; // Import the CSS fil
import Article from './components/Article';
import Course from './components/Course';
import Support from './components/Support';
import  Login from './components/Login'
import { SignedIn, SignedOut } from "@clerk/clerk-react";



function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/article" element={<Article />} />
          <Route path="/course" element={<Course />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      <SignedOut>
          <Hero/>
        </SignedOut>
        <SignedIn>
       

        
  
        
        <div className="footer">
        
        </div>
        </SignedIn>
        <Footer />
      </Router>
    </>
  );
}


export default App;
