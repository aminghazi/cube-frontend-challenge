import React, { useState, useEffect, useContext } from 'react';
import { StepperContext } from '../../context/StepperContext';

const StepOne = () => {
  const {
  name, setName,
  age, setAge,
  formCompletionHandle
  } = useContext(StepperContext)

  const [nameError, setNameError] = useState('')
  const [ageError, setAgeError] = useState('')

  useEffect(() => {
    formCompletionHandle(name && age);
  }, [name, age, formCompletionHandle]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError('Name must be at least 3 characters');
    } else {
      setNameError('');
    }
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
    if (isNaN(event.target.value) || event.target.value < 1 || event.target.value > 120) {
      setAgeError('Age must be a number between 1 and 120');
    } else {
      setAgeError('');
    }
  };

  return (
    <div>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />
        {nameError && <div className="error">{nameError}</div>}
      </div>
      <div className="input-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} required />
        {ageError && <div className="error">{ageError}</div>}
      </div>
    </div>
  );
};

export default StepOne;
