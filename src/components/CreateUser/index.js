import React from 'react';
import './index.css';
import Stepper from '../UI/Stepper/Stepper';
import avatar from '../../icons/user.png';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import { StepperProvider } from '../../context/StepperContext';
import StepThree from './StepThree';

const CreateUser = () => {
  return (
    <section className="create-user">
        <header>
            <img src={avatar} alt="Create User" title="Create User" />
            <h1>Create User</h1>
        </header>
        <StepperProvider>    
            <Stepper initialStep={0}>
                <div label="User Info">
                    <StepOne />
                </div>
                <div label="Add Info">
                    <StepTwo />
                </div>
                <div label="Finish">
                    <StepThree />
                </div>
            </Stepper>
        </StepperProvider>
    </section>
  );
};

export default CreateUser;
