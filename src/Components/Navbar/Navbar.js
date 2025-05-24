import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        // remove email phone
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setUsername("");
       
        // Remove the reviewFormData from local storage
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith("reviewFormData_")) {
                localStorage.removeItem(key);
            }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
        const storedemail = sessionStorage.getItem("email");

        if (storedemail) {
            setIsLoggedIn(true);
            const userName = sessionStorage.getItem("name");
            setUsername(userName);
        }
    }, []);
    return (
        <div className="Navbar">
            <nav>
                <a href="/" className="nav__logo">
                    <span className="logo__text">
                    StayHealthy
                    </span>
                    <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 38.75C8.6 38.75 0.199997 30.35 0.199997 19.95C0.199997 9.55 8.6 1.05 19 1.05" fill="#0284C7"/>
                        <path d="M19 1.05C29.4 1.05 37.8 9.45 37.8 19.85C37.8 30.25 29.4 38.75 19 38.75" fill="#0284C7"/>
                        <path d="M8.2 31.15C9.69117 31.15 10.9 29.9412 10.9 28.45C10.9 26.9588 9.69117 25.75 8.2 25.75C6.70883 25.75 5.5 26.9588 5.5 28.45C5.5 29.9412 6.70883 31.15 8.2 31.15Z" fill="white"/>
                        <path d="M17.5 5.25C18.1075 5.25 18.6 4.75752 18.6 4.15C18.6 3.54249 18.1075 3.05 17.5 3.05C16.8925 3.05 16.4 3.54249 16.4 4.15C16.4 4.75752 16.8925 5.25 17.5 5.25Z" fill="white"/>
                        <path d="M20.5 5.25C21.1075 5.25 21.6 4.75752 21.6 4.15C21.6 3.54249 21.1075 3.05 20.5 3.05C19.8925 3.05 19.4 3.54249 19.4 4.15C19.4 4.75752 19.8925 5.25 20.5 5.25Z" fill="white"/>
                        <path d="M14.3 14.65L14.5 15.65C15 15.45 15.4 15.25 15.9 15.05C18.4 14.25 20.9 14.45 23.2 15.65H23.3L23.5 14.65C21 13.45 18.3 13.25 15.6 14.15C15.1 14.25 14.7 14.45 14.3 14.65Z" fill="white"/>
                        <path d="M30 23.75C29.6 20.55 27.7 17.55 25 15.65L24.8 16.75C27.1 18.55 28.6 21.15 29 23.85C29.4 26.65 28.4 29.25 26.4 31.15C25.3 32.15 23.5 32.65 22.1 32.35C21.3 32.15 20.3 31.75 19.7 30.45C19.5 29.95 19.4 29.45 19.2 28.95C19.1 28.45 19 28.05 19 27.55C19.1 27.05 19.2 26.45 19.5 25.95C19.6 25.65 19.7 25.45 19.9 25.25C20 25.05 20.2 24.85 20.4 24.75C20.8 24.45 21.2 24.25 21.5 23.95C22.1 23.45 22.5 22.75 22.8 22.05C23.7 20.25 24.1 18.35 24.4 16.55L24.6 15.45C24.9 13.55 25.2 11.65 25.4 9.35V9.05C25.6 7.45 25.7 5.55 24.5 4.25C23.7 3.35 22.5 3.25 21.4 3.35C21.7 3.55 21.8 3.85 21.8 4.25V4.35C22.6 4.35 23.3 4.45 23.8 4.95C24.8 5.95 24.6 7.55 24.5 8.95V9.25C24.3 11.35 24.1 13.25 23.8 14.95L23.6 15.95C23.3 17.85 22.9 19.85 22 21.55C21.7 22.05 21.4 22.65 20.9 23.15C20.8 23.25 20.7 23.25 20.6 23.35C20.5 23.35 20.4 23.45 20.3 23.55C19.8 23.85 19.2 23.95 18.6 23.85C18.5 23.85 18.4 23.85 18.3 23.75C17.1 23.45 15.9 22.35 15.4 21.05C14.8 19.45 14.4 17.85 14.1 16.25L13.9 14.85L13.6 12.75C13.5 12.25 13.5 11.85 13.4 11.35C13.1 9.35 12.7 7.25 13.6 5.65C14.2 4.55 15.2 4.15 16.2 4.05V3.95C16.2 3.55 16.4 3.25 16.7 3.05C14.9 3.05 13.4 3.85 12.7 5.25C11.7 7.25 12.1 9.55 12.4 11.65C12.5 12.15 12.6 12.55 12.6 13.05C12.7 13.85 12.8 14.65 13 15.55L13.2 16.65C13.5 18.35 13.9 19.95 14.5 21.55C14.7 22.15 15.1 22.65 15.5 23.15C15.7 23.35 16 23.55 16.2 23.85C16.5 24.15 16.9 24.35 17.1 24.75C17.4 25.15 17.8 25.65 18 26.25C18.2 26.95 18.2 27.75 18.3 28.45C18.4 29.35 18.6 30.15 19 30.95C19.6 32.25 20.7 33.15 22.1 33.45C22.5 33.55 22.8 33.55 23.2 33.55C24.6 33.55 26.1 32.95 27.2 32.05C29.4 29.75 30.5 26.85 30 23.75Z" fill="white"/>
                        <path d="M8.2 20.75C7.5 22.25 7.2 23.75 7.3 25.15L8.3 25.05C8.2 23.85 8.5 22.45 9.1 21.15C10 19.35 11.2 17.95 12.7 16.75L12.5 15.65C10.8 16.95 9.2 18.65 8.2 20.75Z" fill="white"/>
                    </svg>
                </a>
                
                <div className="nav__icon">
                    <i className="fa fa-times fa fa-bars"></i>
                </div>

                <ul className="nav__links active">
                <li className="link">
                    <a href="/">Home</a>
                </li>
                <li className="link">
                    <a href="instant-consultation">Appointments</a>
                </li>
                <li className="link">
                    <a href="booking-consultation">Booking Consultation</a>
                </li>
                <li className="link">
                    <a href="reviews">Reviews</a>
                </li>
                {isLoggedIn?(
                    <>
                        <li className="link">
                            Welcome, {username}
                        </li>
                        <li className="link">
                        <button className="btn2" onClick={handleLogout}>
                            Logout
                        </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li className="link">
                            <a className="btn1" href="/signup">Sign Up</a>
                        </li>
                        <li className="link">
                            <a className="btn1"href="/login">Login</a>
                        </li>
                    </>
                )}
                </ul>
            </nav>
        </div>
    );
  }
  
  export default Navbar;