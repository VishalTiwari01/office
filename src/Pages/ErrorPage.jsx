import React from 'react'
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const Navigation = useNavigate();
    const handelGoBack = () =>{
        Navigation(-1)
    }
  return (
    <div>
        <button onClick={handelGoBack}>Go Back</button>
    </div>
  )
}

export default ErrorPage;