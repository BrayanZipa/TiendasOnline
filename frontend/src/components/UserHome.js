import React from "react"
import { Container, Row, Col, Stack, Image } from "react-bootstrap"
import fondo from "../assets/img/fondo.jpg"

const UserHome = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col>
            <Stack gap={3} className="align-items-center">
                <Image src={fondo} rounded />
            </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default UserHome;
