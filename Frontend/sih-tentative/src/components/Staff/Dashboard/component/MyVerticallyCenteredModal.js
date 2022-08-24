import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default function MyVerticallyCenteredModal(props) {
    const onSubmit = () => {
        alert("Your response has been sent");
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
                    ReJect the Request
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>Enter the reason to reject request</h5>
                <TextField
                    variant="outlined"
                    placeholder="Reason to reject"
                    multiline
                    rows={5}
                    rowsMax={10}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
                <Button onClick={onSubmit}><Link style={{ color: "white" }} to="/staffDashboard">Submit</Link></Button>
            </Modal.Footer>
        </Modal>
    );
}