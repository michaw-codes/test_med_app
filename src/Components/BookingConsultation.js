import React, { useEffect, useState } from 'react';
import './BookingConsultation.css';
import { useSearchParams } from 'react-router-dom';
import FindDoctorSearch from './FindDoctorSearch/FindDoctorSearch';
import DoctorCard from './DoctorCard/DoctorCard';

const BookingConsultation = ({doctors}) => {
    const [searchParams] = useSearchParams();
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    
    const getDoctorsDetails = () => {
        if (searchParams.get('speciality')) {
            console.log(searchParams.get('speciality'));
            console.log(doctors);
            const filtered = doctors.filter(
                doctor => doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase()
            );
            setFilteredDoctors(filtered);
            setIsSearched(true);
        } else {
            setFilteredDoctors([]);
            setIsSearched(false);
        }
    }
    
    useEffect(() => {
        getDoctorsDetails();
        // const authtoken = sessionStorage.getItem("auth-token");
        // if (!authtoken) {
        //     navigate("/login");
        // }
    }, [searchParams, doctors])

    return (
        <center>
            <div  className="searchpage-container">
                <FindDoctorSearch />
                <div className="search-results-container">
                {isSearched ? (
                    <center>
                        <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')}</h2>
                        <h3>Book appointments with minimum wait-time & verified doctor details</h3>
                        {filteredDoctors.length > 0 ? (
                        filteredDoctors.map(doctor => <DoctorCard className="doctorcard" {...doctor} key={doctor.name} />)
                        ) : (
                        <p>No doctors found.</p>
                        )}
                    </center>
                    ) : (
                    ''
                    )}
                </div>
            </div>
        </center>
    )
}

export default BookingConsultation