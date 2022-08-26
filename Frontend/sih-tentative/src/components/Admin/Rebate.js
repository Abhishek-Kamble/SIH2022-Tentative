import React, { useEffect,useState } from 'react'
import { Header, Table, Message, Button, Input } from 'semantic-ui-react'
import axiosconfig, { setToken } from "../../config";
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../toast";
export default function Rebate() {
    const [modalShow, setModalShow] = useState(false);
    const [itemId, setItemId] = useState({
        rebate: '',
        val: ''
    });
    const [inputval, setInputVal] = useState();
    const data = [
        {
            rebate: 'female Discount',
            val: '10%'
        },
        {
            rebate: 'female Discount',
            val: '10%'
        },
        {
            rebate: 'female Discount',
            val: '10%'
        },
        {
            rebate: 'female Discount',
            val: '10%'
        },
        {
            rebate: 'female Discount',
            val: '10%'
        },
        {
            rebate: 'female Discount',
            val: '10%'
        },
    ]
    const [rebates, setRebates] = useState([])
    const [itemData, setItemData] = useState([])
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
        // axiosconfig.get('/staffg?id=2').then((response) => {
        setRebates(data);
        addInfo();
        setLoading(true);
        // }).catch((err) => {
        //     console.log(err);
        // });
    };
    const addInfo = () => {
        const items = [];
        for (let i = 0; i < rebates.length; i++) {
            items.push(
                <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                            {rebates[i].rebate}
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine textAlign='center'>{rebates[i].val}
                    </Table.Cell>
                    <Table.Cell>
                        <Button style={{backgroundColor:'blue',color:'white'}}>Remove</Button>
                        <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => handleUpdate(i)}>Update</Button>
                    </Table.Cell>
                </Table.Row>
            );
        }
        setItemData(items);
    }

    const handleUpdate = (id) => {
        console.log(id);
        const data = {
            rebate:rebates[id].rebate,
            val: rebates[id].val
        };
        setItemId(data);
        setModalShow(true);
        console.log(modalShow);
    }

    const handleModalUpdate = () => {
        console.log(inputval)
        setModalShow(false);
        notify("Rate is successfully updated", "success")
        window.location.href = "http://localhost:3000/rebates";
    }
    const ondataChange = (e) => {
        setInputVal(e.target.value);
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }

    if (localStorage.getItem('role') == '1') {
    return (
        <>
            <h1 style={{padding:'30px'}}>Property Rebates</h1>
            <Table className='table_rebate' celled padded>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign='center'>
                            Rebate
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>Rate
                        </Table.HeaderCell>
                        <Table.HeaderCell textAlign='center'>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {itemData}
                </Table.Body>
            </Table>
            <Modal
                show={modalShow}
                onHide={()=>setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update the Rebate
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Rebate : {itemId.rebate}</h5>
                    <Input placeholder={itemId.val} onChange={ondataChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={()=>setModalShow(false)}>close</Button>
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
