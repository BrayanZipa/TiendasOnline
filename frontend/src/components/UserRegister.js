import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { addUser } from '../apis/usersCRUD'

const UserRegister = () => {
    var user = JSON.parse(localStorage.getItem("session"));

    function save(evento){
        evento.preventDefault();
        const obj = {
            Nombre: evento.target[0].value,
            ID: evento.target[1].value,
            Direccion: evento.target[2].value,
            Pais: evento.target[3].value,
            // id: user.id,
        }
        addUser(obj, (res)=>{
            console.log(res);
            if(res == 'Usuario guardado con exito'){
                user.isNew = false;
                localStorage.setItem("session", JSON.stringify(user));
                window.location.href="/home";
            } else{
                alert("Algo salio mal, vuelve a intentarlo");
            }
        })
    }
    return (
        <>
            <div style={{ textAlign: "center" }}>
                <h1>Registrate!!</h1>
            </div>
            <Form onSubmit={save}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="id">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu número de ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="direccion">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu dirección" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="pais">
                    <Form.Label>País</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu país" />
                </Form.Group>

                <Container fluid="md">
                    <Row>
                        <Col>
                        <Button variant="dark" type="submit">
                            Registrar
                        </Button>
                        </Col>
                    </Row>
                </Container>        
            </Form>
        </>
    )
}

export default UserRegister
