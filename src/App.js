import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notification from './Components/Notification/Notification';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation';

function App() {
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
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/booking-consultation" element={<BookingConsultation />} />
                </Routes>
            </Notification>
        </BrowserRouter>
    </>
  );
}

export default App;
