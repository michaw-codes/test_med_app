import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dateOfAppointment, setDateOfAppointment] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber });
      setName('');
      setPhoneNumber('');
    };

    const timeSlots = ["8-9", "9-10", "10-11", "11-12"];
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dateOfAppointment">Date of Appointment:</label>
          <input
            type="date"
            id="dateOfAppointment"
            value={dateOfAppointment}
            onChange={(e) => setDateOfAppointment(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">Book Time Slot:</label>
          <select
            id="timeSlot"
            value={selectedSlot}
            onChange={(e) => setSelectedSlot(e.target.value)}
            required
          >
            <option value="">Select a time slot</option>
            {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                    {slot}
                </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
