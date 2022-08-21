import React, { useEffect } from 'react'
import { Tab, Card, Button } from 'semantic-ui-react'



const Property = () => {
    useEffect(() => {
        require("../../CSS/Property.css")
    })
    const updateProperty = () => {

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
                    </Card.Group>
                </div>
            </Tab.Pane >
        }
        panes.push(obj);
    }

    return (
        <>
            <div className='add_btnn'>
                <button className='btn_plus'>Add New Property</button>
            </div>
            <div className='tab-bar'>
                <Tab menu={{ vertical: true, tabular: true }} panes={panes} />
            </div>
        </>
    )
}

export default Property