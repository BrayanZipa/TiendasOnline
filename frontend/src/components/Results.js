import React, {useState, useEffect} from 'react'
import { Tab, Row, Col, ListGroup} from 'react-bootstrap'

import { searchUsers } from '../apis/usersCRUD';

const Results = () => {
    //ejemplo de conexion al backend
    /* searchUsers((res)=>{
        console.log(res);
    }) */ 

    const tienda = localStorage.getItem("tienda");
    const [results, setResults] = useState([]);
    useEffect(()=>{
        searchUsers(setResults);
    }, [] ) // [] solo se actualizan los datos en el renderizado

    console.log(results)
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="#0">
            <Row>
                <Col sm={6}>
                    <ListGroup>
                        {results.map((result, index)=>(
                            <ListGroup.Item action href={"#"+index}>
                                <h1>{result.Nombre}</h1>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col sm={6}>
                    <Tab.Content>
                        {results.map((result, index)=>(
                            <Tab.Pane eventKey={"#"+index}>
                                <h1>{result.ID}</h1>
                                <h1>{result.Direccion}</h1>
                                <h1>{result.Pais}</h1>
                            </Tab.Pane>
                        ))}          
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default Results
