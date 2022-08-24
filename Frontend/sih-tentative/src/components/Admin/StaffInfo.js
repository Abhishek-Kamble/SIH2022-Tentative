import React, { useState, useEffect } from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';
import glass from '../../images/glass2.png';
import axiosconfig, { setToken } from "../../config";
import { Dimmer, Loader, Image, Segment, Message } from 'semantic-ui-react'


export default function StaffInfo() {
    const [staffInfo, setStaffInfo] = useState([])
    const [itemData, setItemData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        require("../../CSS/StaffInfo.css")
        if (localStorage.getItem('role') == '1') {
            setToken(localStorage.getItem('token'));
            fetchPost();
        }
    }, [loading]);

    const fetchPost = () => {
        axiosconfig.get('/staffg?id=2').then((response) => {
            setStaffInfo(response.data.Data);
            addInfo();
            setLoading(true);
        }).catch((err) => {
            console.log(err);
        });
    };

    const removeuser = (data) => {
        var api = '/staffd/' + data
        axiosconfig.delete(api).then((response) => {
            console.log(response)
            setLoading(false)
            fetchPost();
        }).catch((err) => {
            console.log(err);
        })
    }

    const addInfo = () => {
        const items = [];
        for (let i = 0; i < staffInfo.length; i++) {
            items.push({
                key: i,
                header: staffInfo[i].fname + " " + staffInfo[i].lname,
                meta: staffInfo[i].employee_id,
                description: <div>
                    <strong>Email: </strong> {staffInfo[i].email}<br />
                    <strong>Mobile No: </strong> {staffInfo[i].mobile_number}<br />
                    <div style={{ marginTop: '15px' }} >
                        <Button color={'blue'} onClick={() => removeuser(staffInfo[i].employee_id)}>
                            Remove
                        </Button>
                    </div>
                </div>,
                style: { overflowWrap: 'break-word', padding: '10px' }
            });
        }
        setItemData(items);
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }
    if (localStorage.getItem('role') === '1') {
        console.log("here role==" + localStorage.getItem('role'))
        if (loading) {
            addInfo();
            return (
                <div className='staffInfo'>
                    <div className="home">
                        <input className='input_staffInfo' type='text' placeholder='search' autoFocus={true} />
                        <img className="glass" alt="magnifying glass" src={glass} />
                    </div>
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
                <Segment className='loader_staffInfo'>
                    <Dimmer active inverted>
                        <Loader size='large'>Loading</Loader>
                    </Dimmer>

                    <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
                </Segment>
            )
        }
    }
    else {
        console.log('In else====' + localStorage.getItem('role'));
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




