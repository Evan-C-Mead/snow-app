import React, { useEffect, useState } from "react";

export default function Clock() {
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
        const options = { weekday: 'long', day: 'numeric', month: 'long'};
        setDay(date.toLocaleDateString(undefined, options).toLocaleUpperCase())
    }, [])

    return (
        <div className="clock-div">
            <h2 className="day">{day}</h2>
            <h2 className="clock">{clock}</h2>
        </div>
    )
}
