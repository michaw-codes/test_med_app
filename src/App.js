import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <>
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<LandingPage/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
