// import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';

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
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/find-doctor" element={<FindDoctorSearch />} />
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
