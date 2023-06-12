import React, { useContext } from 'react'
import { StepperContext } from '../../context/StepperContext'

const StepThree = () => {

const {isLoading} = useContext(StepperContext)    
  return (
    <div>
      {isLoading
        ? <>Loading...</>
        : <div>
          <div>registration has been successfully completed</div>
          <small>please check your console.log!</small>
        </div>}
    </div>
  )
}

export default StepThree