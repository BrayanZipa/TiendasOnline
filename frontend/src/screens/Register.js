import React from 'react'
import { Stack } from 'react-bootstrap'
import UserRegister from '../components/UserRegister'
import {Navigate} from 'react-router-dom'

const Register = () => {
  var component = <Navigate to='/'/>;
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <Stack gap={2} className="col-md-5 mx-auto">
                  <UserRegister/>
                </Stack>
  }
  return (
    <>
      {component}
    </>
  )
}

export default Register
