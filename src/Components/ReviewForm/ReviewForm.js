// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import "./ReviewForm.css";

// Function component for giving reviews
function ReviewForm() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!(formData.name && formData.review && formData.rating > 0)) {
    if (!(formData.name && formData.review)) {
        setShowWarning(true);
        return;
    }
    setShowWarning(false);

    setSubmittedMessage(formData.review);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    setShowForm(false);
  };

  return (
    <div className="reviews">
      <h2>Form with Message</h2>
      {!showForm ? (
        // Display button to open the form
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form className='reviews__form form' onSubmit={handleSubmit}>
          <h2 className='form__heading'>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="review">Review:</label>
            <textarea className="form-control" id="review" name="review" value={formData.review} onChange={handleChange} />
          </div>
          {/* Submit button for form submission */}
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default ReviewForm;
