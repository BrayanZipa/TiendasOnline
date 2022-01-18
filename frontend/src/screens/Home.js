import React from 'react'
import UserHome from '../components/UserHome'
import UserSearchBar from '../components/UserSearchBar'
import {Navigate} from 'react-router-dom'

const Home = () => {
  var component = <Navigate to='/'/>;
  if(JSON.parse(localStorage.getItem('session')) != undefined){
    component = <UserHome/>;
  }
  return (
      <div>
        {component}
        <UserSearchBar/>
      </div>
  )
}

export default Home
