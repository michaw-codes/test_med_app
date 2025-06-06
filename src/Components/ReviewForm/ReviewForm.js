// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import "./ReviewForm.css";

// Function component for giving reviews
const ReviewForm = ({doctors}) => {
    // State variables using useState hook
    const [showForm, setShowForm] = useState(false);
    const [activeReviewIndex, setActiveReviewIndex] = useState(null);
    const [reviews, setReviews] = useState({});
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });

    // Function to handle button click event
    const handleGiveReviewButtonClick = (index) => {
        setActiveReviewIndex(index);
        setShowForm(true);
    };

    // Function to handle Cancle form submission
    const handleCancel = () => {
        setFormData({
            name: '',
            review: '',
            rating: 0
        });
        setActiveReviewIndex(null);
        setShowForm(false);
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
        if (!(formData.name && formData.review && formData.rating > 0)) {
            setShowWarning(true);
            return;
        }
        setReviews({ ...reviews,
            [activeReviewIndex]: {
                'message': formData.review,
                'rating': formData.rating
            }
        });
        setFormData({
            name: '',
            review: '',
            rating: 0,
        });
        setActiveReviewIndex(null);
        setShowForm(false);
    };

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {doctors.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <table className='reviews__table'>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide Review</th>
                            <th>Review Given</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{doctor.name}</td>
                                <td>{doctor.speciality}</td>
                                <td>
                                    {// Display button to open the form
                                    reviews[index] ? (
                                        <button className='btn btn-primary' disabled>Review Given</button>
                                    ) : (
                                        showForm ? (
                                            <button className='btn btn-primary' disabled>Give Review</button>
                                        ) : (
                                            <button className='btn btn-primary' onClick={() => handleGiveReviewButtonClick(index)}>Give Review</button>
                                        )
                                    )}
                                </td>
                                <td>
                                {/* Display the submitted message if available */}
                                {reviews[index]?.message && (
                                    <div>
                                        <p>{reviews[index]?.message}</p>
                                    </div>
                                )}
                                </td>
                                <td>
                                {/* Display the submitted message if available */}
                                {reviews[index]?.rating && (
                                    <div>
                                        <p>{reviews[index]?.rating}</p>
                                    </div>
                                )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {showForm &&
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
                    <div className="form-group">
                        <label htmlFor="rating">Rating:</label>
                        <select
                            id="rating"
                            name="rating"
                            value={formData.rating || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select rating</option>
                            {[1,2,3,4,5].map((rating) => (
                                <option key={rating} value={rating}>
                                    {rating}
                                </option>
                            ))}
                        </select>
                    </div>
                    {/* Submit button for form submission */}
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <button className="btn btn-danger" type="button" onClick={handleCancel}>Cancel</button>
                </form>
            }
        </div>
    );
}

export default ReviewForm;
