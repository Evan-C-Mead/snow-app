import React, { useEffect, useState } from "react";

export default function Hello() {
    const names = ["Pod #1", "Ray", "TJ", "Brantley", "Colleen", "Kasie", "Hunter", "Miz", "Christopher", "Amber", "Marvin", "Lakenya", "Taj", "Tony", "Stephen", "Jeff", "Jess", "Evan", "Friends"];
    const [helloName, setHelloName] = useState(names[0].toLocaleUpperCase());

    useEffect(() => {
        const randomName = setInterval(() => {
            // gets random name from names[] every 3sec
            const randomize = names[Math.floor(Math.random() * names.length)].toLocaleUpperCase();
            setHelloName(randomize);
            console.log(randomize);
        }, 5000);
        // clears the state of current rendered interval to allow new random name from names[]
        return () => clearInterval(randomName);
    },)

    return (
        <div className="hello">
            <h1>HELLO {helloName}!</h1>
        </div>
    )
}
