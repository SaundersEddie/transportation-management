import React, {useState} from 'react';
import { Button, Row, Modal } from 'react-bootstrap';
import warningLogo from '../assets/images/warning_sign.png';

// Click this button will actually take you direct to the
// mini-TMS page, authentication will be added later on

export default function Splash() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <img className = "center-image" src={warningLogo} alt="warning sign"/>
            <h1 align="center">Authourized Users Only</h1>
            <Row className="border-top justify-content-center p-4">
                <Button align="center" size="lg" variant="outline-primary" onClick={handleShow}>Login</Button>
            </Row>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your credentials</Modal.Title>
                </Modal.Header>
                <Modal.Body>Our login form will go here</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
