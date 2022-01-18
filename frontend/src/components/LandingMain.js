import React from 'react'
import { Carousel } from 'react-bootstrap'
import SignInButton from './SignInButton'

import imagen1 from "../assets/img/carrusel1.jpg"

const LandingMain = () => {
    const estilo = {
        backgroundColor: "(0,0,0,0.7)"
    }

    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={imagen1}
                    alt="First slide"
                />
                <Carousel.Caption style={estilo}>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <SignInButton/>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100"
                    src={imagen1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default LandingMain
