import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Note from "./note.js";

const Notes = ({ data }) => {
    return (

        <Container>

            <Row className="g-4">
                {data.map((item) => (
                    <Col md={4} key={item.id}>
                        <Note note={item} />
                    </Col>
                ))}
            </Row>

        </Container>

    );
};

export default Notes;