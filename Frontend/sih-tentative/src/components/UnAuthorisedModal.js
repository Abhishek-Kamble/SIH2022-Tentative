import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function UnAuthorisedModal(props) {
    const onSubmit = () => {
        window.location.href = '/';
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Unauthorised User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You are not valid use as Admin. Please login again!!!
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onSubmit}>Go to Home</Button>
            </Modal.Footer>
        </Modal>
    );
}