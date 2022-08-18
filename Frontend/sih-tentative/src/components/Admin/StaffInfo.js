import React , {useState , useEffect} from 'react';
import { Button ,Card, Grid} from 'semantic-ui-react';
import "../../CSS/StaffInfo.css";
import glass from '../../images/glass2.png';


export default function StaffInfo() {
    const staffInfo=[
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
        {
            fname:'Vaishnavi',
            lname:'Disale',
            mobile_no:'1234556789',
            email:'staff@gmail.com',
            id:'123d45'
        },
    ]
    // const handleOnChange =()=>{

    // }
    const items=[];
    for(let i=0;i<staffInfo.length;i++){
    
        items.push({
            header :staffInfo[i].fname+" "+staffInfo[i].lname,
            meta :staffInfo[i].id,
            description :   <div>
                                <strong>Email: </strong> {staffInfo[i].email}<br/>
                                <strong>Mobile No: </strong> {staffInfo[i].mobile_no}<br/>
                                <div style = {{marginTop : '15px'}} >
                                    <Button color={'blue'}>
                                        Remove
                                    </Button>
                                </div>
                            </div>,
            style : { overflowWrap : 'break-word',padding :'10px' }
        });
    }


        return (
            <div>
                 <div className="home">
                    <input type='text' placeholder='search' autoFocus={true} />
                    <img  className="glass" alt="magnifying glass" src={glass}  />
                </div>
                <Grid >
                    <Grid.Row>
                        <Card.Group className='cardItems' items = {items} />
                    </Grid.Row>
                </Grid>
            </div>
        )
    
}




