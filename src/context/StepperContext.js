import React, { createContext, useState } from 'react'
import { createUser } from '../sdk'

const StepperContext = createContext()

const StepperProvider = ({ children }) => {
  const [stepOneData, setStepOneData] = useState({ name: '', age: '' })

  const updateStepOneData = (data) => {
    setStepOneData(data)
  }

  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [isNextDisabled, setIsNextDisabled] = useState(true)

  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  const [email, setEmail] = useState('')
  const [newsletterType, setNewsletterType] = useState('daily')

  const formCompletionHandle = (isFormComplete) => {
    setIsNextDisabled(!isFormComplete)
  }

  const [isLoading, setIsLoading] = useState(false)
  const submitHandle = async () => {
    setIsLoading(true)

    const user = { name, email, age, newsletterType }
    await createUser(user)
      .then((response) => console.log(response))
      .finally(() => setIsLoading(false))
  }

  const context = {
    stepOneData,
    updateStepOneData,
    name,
    setName,
    age,
    setAge,
    email,
    setEmail,
    newsletterType,
    setNewsletterType,
    currentStep,
    setCurrentStep,
    completedSteps,
    setCompletedSteps,
    isNextDisabled,
    setIsNextDisabled,
    formCompletionHandle,
    submitHandle,
    isLoading,
  }

  return (
    <StepperContext.Provider value={context}>
      {children}
    </StepperContext.Provider>
  )
}

export { StepperContext, StepperProvider }
