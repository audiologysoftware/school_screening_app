import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate sending a password reset email
        setMessage(`Password reset link has been sent to ${email}`);
        setTimeout(() => navigate('/change-password'), 3000); // Simulate redirect
    };

    return (
        <div className="forgot-password-page">
            <div className='school'>
                <h1>EarlySpark</h1>
            </div>
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
             
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Send Reset Link</button>
                </form>
                {message && <p className="success-message">{message}</p>}
            </div>
        </div>
    );
};

export default ForgotPassword;