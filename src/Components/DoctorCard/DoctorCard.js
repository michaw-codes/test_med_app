import React, { useEffect, useState } from 'react';
import 'reactjs-popup/dist/index.css';
import './DoctorCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm'
import { v4 as uuidv4 } from 'uuid';


const DoctorCard = ({ name, speciality, experience, ratings, profilePic }) => {
//   const [showModal, setShowModal] = useState(false);
  const [appointment, setAppointment] = useState({});

//   const handleBooking = () => {
//     setShowModal(true);
//   };
    useEffect(() => {
        const appointmentData = JSON.parse(localStorage.getItem(name));
        if (appointmentData) {
            setAppointment(appointmentData);
        }
    })

    const handleCancel = () => {
        setAppointment({});
        console.log(name);
        let appointmentData = JSON.parse(localStorage.getItem(name))
        console.log(appointmentData);
        localStorage.removeItem(name);
        localStorage.removeItem('doctorData');
        window.location.reload();
    };

    const handleFormSubmit = (appointmentData) => {
        const newAppointment = {
        id: uuidv4(),
        ...appointmentData,
        };
        // const updatedAppointments = [...appointments, newAppointment];
        setAppointment(newAppointment);
        // setShowModal(false);
        const doctor = {name: name, speciality: speciality};
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const newDoctorData = [...storedDoctorData, doctor];
        localStorage.setItem('doctorData', JSON.stringify(newDoctorData));
        localStorage.setItem(name, JSON.stringify(newAppointment));
        window.location.reload();
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
                {/* <button className='book-appointment-btn'>                    
                    <div>Book Appointment</div>
                    <div>No Booking Fee</div>
                </button> */}
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
