import React from 'react'
import {Navigate} from 'react-router-dom'

const Profile = () => {
  var component = <Navigate to='/'/>;
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <h1>Perfil</h1>;
  }
  return (
    <>
      {component}
    </>
  )
}

export default Profile
