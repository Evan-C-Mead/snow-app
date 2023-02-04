import React, { } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function NameCard() {
    const pod1 = ["Ray", "TJ", "Brantley", "Colleen", "Kasie", "Hunter", "Miz", "Marvin", "Lakenya", "Taj", "Tony", "Stephen", "Jeff", "Jess", "Evan"].sort();
    // const [name, setName] = useState(names[0].toLocaleUpperCase());
    const nextGen = "NextGen Extern";

    return (
        <div className="name-cards">
            <Row xs={1} md={4} className="name-row g-4">
                {Array.from({ length: pod1.length }).map((_, idx) => (
                    <Col className="name-col" key={idx}>
                        <Card className="name-card">
                            <Card.Img className="name-card-img" variant="top" src="/media/snow-logo.svg" />
                            <Card.Body className="name-card-body">
                                <Card.Title className="name-card-title">{pod1[idx].toLocaleUpperCase()}</Card.Title>
                                <Card.Text className="name-card-text">{nextGen.toLocaleUpperCase()}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
