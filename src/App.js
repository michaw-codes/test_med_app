import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './Components/Notification/Notification';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';

function App() {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
            .then(res => res.json())
            .then(data => setDoctors(data))
            .catch(err => console.log(err));
    }, [])

    return (
        <>
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                {/* Set up the Routes for different pages */}
                <Notification>
                    <Routes>
                        {/* Define individual Route components for different pages */}
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/instant-consultation" element={<InstantConsultation doctors={doctors} />} />
                        <Route path="/booking-consultation" element={<BookingConsultation doctors={doctors} />} />
                        <Route path="/reviews" element={<ReviewForm doctors={doctors} />} />
                    </Routes>
                </Notification>
            </BrowserRouter>
        </>
    );
}

export default App;
