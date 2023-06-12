import React, { useContext } from 'react';
import './Stepper.css';
import check from '../../../icons/check.png';
import { StepperContext } from '../../../context/StepperContext';

const Stepper = ({ children }) => {
const {currentStep, setCurrentStep,
completedSteps, setCompletedSteps,
isNextDisabled, submitHandle} = useContext(StepperContext)

  const stepChangeHandle = (step) => {
    setCurrentStep(step);
  };

  const nextHandle = () => {
    if (currentStep < children.length - 1) {
      const updatedCompletedSteps = [...completedSteps];
      updatedCompletedSteps[currentStep] = true;
      setCompletedSteps(updatedCompletedSteps);
      stepChangeHandle(currentStep + 1);
    }
  };

  const prevHandle = () => {
    if (currentStep > 0) {
      const updatedCompletedSteps = [...completedSteps];
      updatedCompletedSteps[currentStep - 1] = false;
      setCompletedSteps(updatedCompletedSteps);
      stepChangeHandle(currentStep - 1);
    }
  };



  return (
    <div className="stepper">
      <div className="steps">
        {React.Children.map(children, (step, index) => (
          <div
            key={index}
            className={`step ${index === currentStep ? 'active' : ''} ${
              completedSteps[index] ? 'completed' : ''
            }`}
          >
            {completedSteps[index] && index !== currentStep ? (
              <div className="check-icon">
                <img src={check} alt="check" title="check" />
              </div>
            ) : (
              <div className="step-number">{index + 1}</div>
            )}
            <span className="step-text">{step.props.label}</span>
          </div>
        ))}
      </div>

      <div className="step-content">
        {children?.[currentStep]}
      </div>

      <div className="step-footer">
        <button className="prev" onClick={prevHandle} disabled={currentStep === 0}>
          Prev
        </button>
        <button
          className="next"
                  onClick={() => {
                      nextHandle()
                      currentStep === 1 && submitHandle()
                  }}
          disabled={isNextDisabled || currentStep === children.length - 1}
        >
          {currentStep === 0 && 'Next'}
          {currentStep === 1 && 'Submit'}
          {currentStep === 2 && 'Done'}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
