import React , {useState , useEffect} from 'react';
import { Button ,Card, Grid} from 'semantic-ui-react';
import glass from '../../images/glass2.png';
import axiosconfig from "../../config";


export default function StaffInfo() {
    const [staffInfo, setStaffInfo]=useState([])
    useEffect(()=>{
        require("../../CSS/StaffInfo.css")
        const fetchPost = async () => {
            let response = await axiosconfig.get('/staffg?id=2');
            setStaffInfo(response.data);
            console.log(staffInfo);
        };
        fetchPost();
      })
    const staffnfo=[
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
            <div className='staffInfo'>
                 <div className="home">
                    <input className='input_staffInfo' type='text' placeholder='search' autoFocus={true} />
                    <img  className="glass" alt="magnifying glass" src={glass}  />
                </div>
                <Grid className='grid_staffInfo'>
                    <Grid.Row>
                        <Card.Group className='cardItems' items = {items} />
                    </Grid.Row>
                </Grid>
            </div>
        )
    
}




