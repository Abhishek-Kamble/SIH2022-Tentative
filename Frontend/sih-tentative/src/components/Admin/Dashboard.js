import React from 'react'
import { Link } from 'react-router-dom';
import { Button,Message } from 'semantic-ui-react';

export default function AdminDashboard() {
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }

    if (localStorage.getItem('role') == '1') {
        return (
            <>
                <div style={{padding:"30px"}}>
                    <Button style={{ backgroundColor: 'blue' }}><Link style={{ color: 'white' }} to="/addZone">Add Zone</Link></Button>
                </div>
                <div style={{ padding: "30px" }}>
                    <Button style={{ backgroundColor: 'blue' }}><Link style={{ color: 'white' }} to="/taxRate">Tax Rates</Link></Button>
                </div>
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
