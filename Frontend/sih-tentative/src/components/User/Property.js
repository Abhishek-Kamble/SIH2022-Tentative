import React, { useState, useEffect } from 'react'
import { Tab, Card, Button, Message } from 'semantic-ui-react'
import axiosconfig, { setToken } from "../../config";



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
            const panes = [];
            for (var i = 0; i < propertydata.length; i++) {
                var pd = propertydata[i];
                console.log(pd)
                var obj = {
                    menuItem: propertydata[i].property_id,
                    render: () => 
                        <Tab.Pane>
                        <div style={{ padding: '30px' }}>
                            <div >
                                <h1>Property Id -{pd.property_id}</h1>
                                <h3 style={{ textAlign: 'center' }}>{pd.property_address}</h3>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button style={{ backgroundColor: '#2218A7', color: 'white' }} onClick={updateProperty}>Update Prperty Details</Button>
                                </div>
                            </div>
                            {/* <br></br><br></br><hr></hr>
                            <h1>Pending............</h1>
                            <Card.Group>
                                <Card fluid color='blue' >
                                    <div style={{ padding: '20px' }}>
                                        <h3 style={{ display: 'inline-block' }}>1235df54hd</h3>
                                        <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Bill</Button>
                                        <Button style={{ width: '8%', display: 'inline-block', backgroundColor: '#2218A7', color: 'white' }} floated='right'>Pay</Button>
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
                            </Card.Group> */}
                        </div>
                    </Tab.Pane >
                    }
                
                    panes.push(obj);
            }
            setPropertyItems(panes);
            setLoading(true);
        }).catch((err) => {
            console.log(err);
        });
    }, [loading])
    const updateProperty = () => {

    }

    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }
    if (localStorage.getItem('role') == '5') {
        return (
            <>
                <div className='add_btnn'>
                    <button className='btn_plus'>Add New Property</button>
                </div>
                <div className='tab-bar'>
                    <Tab menu={{ vertical: true, tabular: true }} panes={PropertyItems} />
                </div>
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

export default Property