import React from 'react'
import {Dropdown} from 'react-bootstrap'

const UserSearchBar = () => {
  const redirectURL = "/searchresults";

  function Save (tienda){
    localStorage.setItem("tienda", tienda)
  }

  return (
    <Dropdown>
      <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
        Ejemplo busqueda
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href={redirectURL} onClick={()=> {Save("Cigarreria")}}>Cigarreria</Dropdown.Item>
        <Dropdown.Item href={redirectURL} onClick={()=> {Save("Panaderia")}}>Panaderia</Dropdown.Item>
        <Dropdown.Item href={redirectURL} onClick={()=> {Save("Peluqueria")}}>Peluqueria</Dropdown.Item>
        <Dropdown.Item href={redirectURL} onClick={()=> {Save("Carniceria")}}>Carniceria</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default UserSearchBar
