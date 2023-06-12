import React, { useState, useEffect, useContext } from 'react';
import './index.css';
import { StepperContext } from '../../context/StepperContext';

const StepTwo = () => {
  const {
  email, setEmail,
  newsletterType, setNewsletterType, formCompletionHandle
  } = useContext(StepperContext)

  const [emailError, setEmailError] = useState('')

  useEffect(() => {
    formCompletionHandle(email && newsletterType);
  }, [email, newsletterType, formCompletionHandle]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!/^\S+@\S+\.\S+$/.test(event.target.value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const handleNewsletterTypeChange = (event) => {
    setNewsletterType(event.target.value);
  };

  return (
    <div>
      <div className="input-group">
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
        {emailError && <div className="error">{emailError}</div>}
      </div>
      <div className="input-group">
        <label>Newsletter Type</label>
        <select value={newsletterType} onChange={handleNewsletterTypeChange}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
    </div>
  );
};

export default StepTwo;
