import React, { useEffect, useState } from 'react';
// import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import { v4 as uuidv4 } from 'uuid';


const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
  const [appointment, setAppointment] = useState({});

    useEffect(() => {
        const appointmentData = JSON.parse(sessionStorage.getItem(name));
        if (appointmentData) {
            setAppointment(appointmentData);
        }
    }, [])

    const handleCancel = () => {
        setAppointment({});
        sessionStorage.removeItem(name);
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
        id: uuidv4(),
        ...appointmentData,
        };
        setAppointment(newAppointment);
        sessionStorage.setItem(name, JSON.stringify(newAppointment));
    };

    return (
        <div className="doctor-card-container">
        <div className="doctor-card-details-container">
            <div className="doctor-card-profile-image-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"> <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/> </svg>
            </div>
            <div className="doctor-card-details">
            <div className="doctor-card-detail-name">{name}</div>
            <div className="doctor-card-detail-speciality">{speciality}</div>
            <div className="doctor-card-detail-experience">{experience} years experience</div>
            <div className="doctor-card-detail-consultationfees">Ratings: {ratings}</div>
            </div>
            <div>
                {appointment.id ? (
                    <button className="book-appointment-btn cancel-appointment" onClick={() => handleCancel()}>Cancel Appointment</button>
                ) : (
                    <AppointmentForm doctorName={name} doctorSpeciality={speciality} onSubmit={handleFormSubmit} />
                )}
            </div>
        </div>
        </div>
    );
};

export default DoctorCard;
