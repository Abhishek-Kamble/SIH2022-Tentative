import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
import { Tab, Card, Button, Message, Filter } from 'semantic-ui-react'
import axiosconfig, { setToken } from "../../config";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../toast";


const Property = () => {
    const [propertydata, setPropertyData] = useState([])
    const [loading, setLoading] = useState(false)
    const [PropertyItems, setPropertyItems] = useState([])
    useEffect(() => {
        require("../../CSS/Property.css")
        setToken(localStorage.getItem('token'));
        axiosconfig.get('/Property/details').then((response) => {
            // console.log()
            setPropertyData(response.data.data)
            var propertydata = response.data.data
            const panes = [];
            for (var i = 0; i < propertydata.length; i++) {
                const pd = propertydata[i];
                var obj = {
                    menuItem: propertydata[i].property_id,
                    render: () => {
                        return (
                            <Tab.Pane key={i}>
                                {/* <Filter key={pd.property_id} name={pd.property_id} /> */}
                                <div style={{ padding: '30px' }}>
                                    <div >
                                        <h1>Property Id -{pd.property_id}</h1>
                                        <h3 style={{ textAlign: 'center' }}>{pd.property_address}</h3>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button style={{ backgroundColor: '#2218A7', color: 'white' }} onClick={() => updateProperty(pd)}>Update Prperty Details</Button>
                                        </div>
                                    </div>
                                    <br></br><br></br><hr></hr>
                                    <h1>Pending............</h1>
                                    <Card.Group>
                                        <Card fluid color='blue' >
                                            <div style={{ padding: '20px' }}>
                                                <h3 style={{ display: 'inline-block' }}>1235df54hd</h3>
                                                <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'> <Link to={`bill/${pd.property_id}`}>Bill</Link> </Button>
                                                <Button onClick={ApiForRazorpay} style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Pay</Button>
                                            </div>
                                        </Card>
                                    </Card.Group>
                                    <br></br><br></br><hr></hr>
                                    <h1>Paid</h1>
                                    <Card.Group>
                                        <Card fluid color='blue' >
                                            <div style={{ padding: '20px' }}>
                                                <h3 style={{ display: 'inline-block' }}>1235df54hd</h3>
                                                <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Bill</Button>
                                            </div>
                                        </Card>
                                    </Card.Group>
                                </div>
                            </Tab.Pane >
                        )
                    }
                }

                panes.push(obj);
            }
            // console.log(panes)
            setPropertyItems(panes);
            require("../../CSS/Property.css")
            const script = document.createElement('script')
            script.src = 'https://checkout.razorpay.com/v1/checkout.js'
            script.async = true
            script.id = 'razorpay-script'
            document.head.appendChild(script)
            setLoading(true);
            return () => {
                const script = document.getElementById('razorpay-script')
                const rContainer = document.querySelector('.razorpay-container')
                console.log('script2', rContainer)
                rContainer && rContainer.remove()
                script && script.remove()
            };
        }).catch((err) => {
            console.log(err);
        });
    }, [loading])

    const updateProperty = (data) => {
        console.log('updateProperty', data);
    }


    // useEffect(() => {

    // }, []);

    //razorpay integration
    const confirmPayment = () => {

    }
    const ApiForRazorpay = async () => {
        displayRazorpay();
    }

    const displayRazorpay = async () => {
        console.log(process.env.REACT_APP_API_KEY_RAZORPAY);
        const options = {
            key: "rzp_test_av6t1hoxffSiUW",
            currency: "INR",
            amount: 1 * 100,
            name: "EGov",
            image: "https://brandeps.com/logo-download/E/EGov-logo-vector-01.svg",

            "handler": function (response) {
                notify("Payment Successfull", "success");
                confirmPayment();

            },
            "prefill": {
                name: "EGov"
            }
        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on('payment.failed', function (response) {
            notify(response.error.code);
            notify(response.error.description);
            notify(response.error.source);
            notify(response.error.step);
            notify(response.error.reason);
            notify(response.error.metadata.order_id);
            notify(response.error.metadata.payment_id);
        });



    }
    const panes = [];
    for (var i = 0; i < 3; i++) {
        var obj = {
            menuItem: 'Tab 1', render: () => <Tab.Pane>
                <div style={{ padding: '30px' }}>
                    <div >
                        <h1>Property Id</h1>
                        <h3 style={{ textAlign: 'center' }}>Miraj, Kupwad, sangli Maharashtra 416415</h3>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button style={{ backgroundColor: '#2218A7', color: 'white' }} onClick={updateProperty}>Update Prperty Details</Button>
                        </div>
                    </div>
                    <br></br><br></br><hr></hr>
                    <h1>Pending............</h1>
                    <Card.Group>
                        <Card fluid color='blue' >
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ display: 'inline-block' }}>1235df54hd</h3>
                                <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Bill</Button>
                                <Button onClick={ApiForRazorpay} style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Pay</Button>
                            </div>
                        </Card>
                        <Card fluid color='blue' header='Option 2' />
                        <Card fluid color='blue' header='Option 3' />
                    </Card.Group>
                    <br></br><br></br><hr></hr>
                    <h1>Paid</h1>
                    <Card.Group>
                        <Card fluid color='blue' >
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ display: 'inline-block' }}>1235df54hd</h3>
                                <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Bill</Button>
                            </div>
                        </Card>
                        <Card fluid color='blue' header='Option 2' />
                        <Card fluid color='blue' header='Option 3' />
                    </Card.Group>
                </div>
            </Tab.Pane >
        }
        panes.push(obj);
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }
    if (localStorage.getItem('role') == '5' && loading) {
        return (
            <>
                {/* <div className='add_btnn'>
                        <button className='btn_plus'>Add New Property</button>
                    </div> */}
                <div className='tab-bar'>
                    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={PropertyItems} />
                </div>
                <ToastContainer />
            </>
        )
    }
    else {
        return (
            <Message floating style={{ padding: '60px' }}>
                <h2>You are not authorised User. Please login again!</h2>
                <div>
                    <Button color='primary' onClick={handleGoHome}>Go to Home</Button>
                </div>
            </Message>
        )
    }
}

export default Property;