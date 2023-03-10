import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

export default function Hello() {
    const names = ["Pod #1", "Ray", "TJ", "Brantley", "Colleen", "Kasie", "Hunter", "Miz", "Christopher", "Amber", "Marvin", "Lakenya", "Taj", "Tony", "Stephen", "Jeff", "Jess", "Evan", "Friends"];
    const [name, setName] = useState(names[0].toLocaleUpperCase());

    useEffect(() => {
        const randomName = setInterval(() => {
            // gets random name from names[] every 3sec
            const randomize = names[Math.floor(Math.random() * names.length)].toLocaleUpperCase();
            setName(randomize);
            console.log(randomize);
        }, 5000);
        // clears the state of current rendered interval to allow new random name from names[]
        return () => clearInterval(randomName);
    },)

    const date = new Date();
    const hrs = date.getHours();
    let greeting;

    if (hrs < 4) {
        greeting = "You're a night owl";
    }
    else if (hrs < 11) {
        greeting = "Good morning,";
    }
    else if (hrs < 13) {
        greeting = "Lunch time";
    }
    else if (hrs < 17) {
        greeting = "Good afternoon";
    }
    else if (hrs < 22) {
        greeting = "Good evening,";
    }
    else {
        greeting = "Go to bed";
    }

    return (
        <div className="hello">
            <Card className="hello-card text-center">
                <Card.Body className="hello-card-body">
                    <h5>{greeting.toLocaleUpperCase()} {name}!</h5>
                </Card.Body>
            </Card>
        </div>
    )
}
