import React, { useEffect, useState } from 'react'
import { Header, Table, Message, Button, Input } from 'semantic-ui-react'
import axiosconfig, { setToken } from "../../config";
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";
import { Link } from 'react-router-dom';
export default function TaxRate() {
    const [modalShow, setModalShow] = useState(false);
    const [itemId, setItemId] = useState({
        rebate: '',
        val: ''
    });
    const [inputval, setInputVal] = useState();
    const data =
    {
        residential_taxes_general_per: '34221',
        water_benefit_task_per: '34221',
        sewarage_tax_per: '34221',
        sewarage_benefit_tax_per: '34221',
        education_cess_per: '34221',
        tree_cess_per: '34221',
        stree_tax_per: '34221',
        employment_guarantee_per: '34221',
        fire_tax_per: '34221',
        discount: '34221',
    }

    const [policy, setPolicy] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        require("../../CSS/Rebates.css")
        if (localStorage.getItem('role') == '1') {
            setToken(localStorage.getItem('token'));
            fetchPost();
        }
    }, [loading]);

    const fetchPost = () => {
        console.log("rerenders")
        axiosconfig.get('/taxrate').then((response) => {
            setPolicy(response.data.data);
            setLoading(true);
        }).catch((err) => {
            console.log(err);
        });
    };


    const handleUpdate = (id) => {
        console.log(id);
        const data = {
            id: policy[id].tax_id,
            tax: policy[id].tax_name,
            val: policy[id].taxrate
        };
        setItemId(data);
        setModalShow(true);
        console.log(modalShow);
    }

    const handleModalUpdate = () => {
        console.log("obj");
        console.log(itemId)
        axiosconfig.patch('/taxrate', { taxrate: inputval, tax_name: itemId.tax, tax_id: itemId.id }).then((response) => {
            console.log(response)
            notify("Rate is successfully updated", "success")
            window.location.href = "http://localhost:3000/taxRate";
        })
            .catch((err) => {
                console.log(err);
            })
        setModalShow(false);

    }
    const ondataChange = (e) => {
        setInputVal(e.target.value);
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }

    if (localStorage.getItem('role') == '1' && loading) {
        return (
            <>
                {/* <Button style={{ backgroundColor: 'blue'}}><Link style={{ color: 'white' }} to="/addtax"> Add Tax</Link></Button> */}
                <h1 style={{ padding: '30px' }}>Property Tax rates</h1>
                <Table className='table_rebate' celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign='center'>
                                Property Tax
                            </Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>Rate
                            </Table.HeaderCell>
                            <Table.HeaderCell textAlign='center'>
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {console.log(policy)}
                        {policy.map((item, index) => {
                            return (<Table.Row key={index}>
                                <Table.Cell>
                                    <Header as='h2' textAlign='center'>
                                        {item.tax_name}
                                    </Header>
                                </Table.Cell>
                                <Table.Cell singleLine textAlign='center'>{item.taxrate}
                                </Table.Cell>
                                <Table.Cell>
                                    <Button style={{ backgroundColor: 'blue', color: 'white' }}>Remove</Button>
                                    <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleUpdate(index)}>Update</Button>
                                </Table.Cell>
                            </Table.Row>)
                        })}
                    </Table.Body>
                </Table>
                <Modal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Update the Policy
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h5>Policy : {itemId.tax}</h5>
                        <Input placeholder={itemId.val} onChange={ondataChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => setModalShow(false)}>close</Button>
                        <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={handleModalUpdate}>Update</Button>
                    </Modal.Footer>
                </Modal>
                <ToastContainer />
            </>
        )
    }
    else {
        return (
            <Message floating style={{ padding: '60px' }}>
                <h2>You are not authorised as Admin. Please login again!</h2>
                <div>
                    <Button color='primary' onClick={handleGoHome}>Go to Home</Button>
                </div>
            </Message>
        )
    }

}
