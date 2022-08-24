import React, { useState, useEffect } from 'react';
import { Button, Card, Grid } from 'semantic-ui-react';
import glass from '../../images/glass2.png';
import axiosconfig, { setToken } from "../../config";
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'


export default function StaffInfo() {
    const [staffInfo, setStaffInfo] = useState([])
    useEffect(() => {
        require("../../CSS/StaffInfo.css")
        setToken(localStorage.getItem('token'));
        const fetchPost = () => {
            axiosconfig.get('/staffg?id=2').then((response) => {
                setStaffInfo(response.data);

            }).catch((err) => {
                console.log(err);
            });
            console.log(staffInfo);
        };
        fetchPost();
    },[]);
  
    // const handleOnChange =()=>{

    // }

    const items = [];
    const addInfo = () => {
        for (let i = 0; i < staffInfo.length; i++) {

            items.push({
                header: staffInfo[i].fname + " " + staffInfo[i].lname,
                meta: staffInfo[i].id,
                description: <div>
                    <strong>Email: </strong> {staffInfo[i].email}<br />
                    <strong>Mobile No: </strong> {staffInfo[i].mobile_no}<br />
                    <div style={{ marginTop: '15px' }} >
                        <Button color={'blue'}>
                            Remove
                        </Button>
                    </div>
                </div>,
                style: { overflowWrap: 'break-word', padding: '10px' }
            });
        }
    }

    if (staffInfo.length > 0) {
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
    else
    {
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




