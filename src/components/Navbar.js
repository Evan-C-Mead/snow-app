import React, { } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {
    return (
        <>
            {/* <Navbar className="nav"> */}
            <Navbar className="nav">
                <Container className="nav-container">
                    <Navbar.Brand>
                        <img src="/media/snow-logo.svg" width="90" height="18" className="logo d-inline-block align-top" alt="logo" />
                    </Navbar.Brand>
                    <div>
                        
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
