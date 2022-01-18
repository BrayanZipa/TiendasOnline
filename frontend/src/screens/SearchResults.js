import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Results from '../components/Results'
import { Navigate } from 'react-router-dom'

const SearchResults = () => {
  const tienda = localStorage.getItem("tienda");
  var component = <Navigate to='/' />;
  if (JSON.parse(localStorage.getItem('session')) != undefined) {
    component = <Container>
                  <Row>
                    <h1>Tienda: {tienda}</h1>
                  </Row>
                  <Row>
                    <Col>
                      <Results />
                    </Col>
                  </Row>
                </Container>
  }
  
  return (
    <>
      {component}
    </>
  )
}

export default SearchResults
