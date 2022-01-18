import React from "react"
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    const closeSession = ()=>{
        localStorage.clear();
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/profile">Perfil</Nav.Link>
                            <Nav.Link href="/" onClick={closeSession}>Salir</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
