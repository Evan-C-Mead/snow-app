import React, { } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function NameCard() {
    const names = ["Pod #1", "Ray", "TJ", "Brantley", "Colleen", "Kasie", "Hunter", "Miz", "Christopher", "Amber", "Marvin", "Lakenya", "Taj", "Tony", "Stephen", "Jeff", "Jess", "Evan", "Cohort"];
    // const [name, setName] = useState(names[0].toLocaleUpperCase());

    return (
        <div className="name-cards">
            <Row xs={1} md={4} className="name-row g-4">
                {Array.from({ length: names.length }).map((_, idx) => (
                    <Col className="name-col">
                        <Card className="name-card">
                            <Card.Img variant="top" src="/media/snow-logo.svg" />
                            <Card.Body>
                                <Card.Title>{names[idx].toLocaleUpperCase()}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
