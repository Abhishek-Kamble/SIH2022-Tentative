import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Grid, Message } from 'semantic-ui-react';


export default function Dashboard() {
    useEffect(() => {
        require("../../../CSS/StaffInfo.css")
    })
    const staffInfo = [
        {
            property_id: '1234556789',
            property_address:'street No:19, VishramBag, Sangli'
        },
        {
            property_id: '1234556789',
            property_address: 'street No:19,Sangli'
        },
        {
            property_id: '1234556789',
            property_address: 'street No:19, VishramBag, Sangli'
        },
        {
            property_id: '1234556789',
            property_address: 'street No:19, VishramBag, street No:19, VishramBag Sangli'
        },
        {
            property_id: '1234556789',
            property_address: 'street No:19, VishramBag, Sangli'
        },
        {
            property_id: '1234556789',
            property_address: 'street No:19, VishramBag, Sangli'
        }
    ]
    const items = [];
    for (let i = 0; i < staffInfo.length; i++) {

        items.push({
            header: staffInfo[i].property_id,
            description: <div>
                {staffInfo[i].property_address}<br />
                <div style={{ marginTop: '15px' }} >
                    <Button color={'blue'}>
                        <Link style={{color:'white'}} to="/viewProperty">View</Link>
                    </Button>
                </div>
            </div>,
            style: { overflowWrap: 'break-word', padding: '10px' }
        });
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }
    if (localStorage.getItem('role') == '2') {
        return (
            <div className='staffInfo'>
                <h1 style={{ marginTop: '4%', textDecorationLine: 'underline' }}>Property Update Requests</h1>
                <Grid className='grid_staffInfo'>
                    <Grid.Row>
                        <Card.Group className='cardItems' items={items} />
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
    else {
        return (
            <Message floating style={{ padding: '60px' }}>
                <h2>You are not authorised as Staff. Please login again!</h2>
                <div>
                    <Button color='primary' onClick={handleGoHome}>Go to Home</Button>
                </div>
            </Message>
        )
    }

}




