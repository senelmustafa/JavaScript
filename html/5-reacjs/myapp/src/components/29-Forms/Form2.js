import React, { useState } from "react";
import { Button, Container, Form, Alert } from "react-bootstrap";
const Form2 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastName = (e) => {
        setLastName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    return (
        <Container className="mt-5">
            <Form>
                <Alert variant="danger">Telefon numaranızı giriniz</Alert>
                <Form.Group className="mb-3">
                    <Form.Label>Ad</Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={handleFirstName}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Soyad</Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={handleLastName}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={handleEmail} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control type="text" value={phone} onChange={handlePhone} />
                </Form.Group>
                <Button variant="warning">Gönder</Button>
            </Form>
        </Container>
    );
};
export default Form2;