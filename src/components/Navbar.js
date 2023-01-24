import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Nav() {

    const [clock, setClock] = useState();
    const [day, setDay] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClock(date.toLocaleTimeString());
        }, 1000);
    }, [])

    useEffect(() => {
        const date = new Date();
        const options = { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' };
        setDay(date.toLocaleDateString(undefined, options).toLocaleUpperCase())
    }, [])

    return (
        <div>
            <Navbar className="nav">
                <Container className="nav-container">
                    <div className="nav-logo">
                        <Navbar.Brand>
                            <img src="/media/snow-logo.svg" width="90" height="16" className="logo d-inline-block align-top" alt="logo" />
                        </Navbar.Brand>
                    </div>
                </Container>
                <Container className="date-time">
                    <div className="clock-div">
                        <p className="day">{day}</p>
                        <p className="clock">{clock}</p>
                    </div>
                </Container>
            </Navbar>
            <hr className="nav-hr" />
        </div>
    )
}
