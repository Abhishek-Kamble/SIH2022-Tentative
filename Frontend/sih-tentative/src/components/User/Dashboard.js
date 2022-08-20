import { Carousel } from 'react-bootstrap';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Image ,Tab, Form, Button } from 'semantic-ui-react';
import userProfile from '../../images/user.png'


const UserDashboard =()=>{
            const images = [
                {url : 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'}, 
                {url :'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80'},
                {url :"https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"}
        ];
        useEffect(()=>{
            require("../../CSS/UserDashboard.css")
        })

        const panes = [
            { menuItem: 'Profile', render: () => <Tab.Pane>
                <Card className="main-card ui container center aligned blue">
                    <Image src={userProfile} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Description>
                            123456788<br></br>
                            sjsk@gmail.com<br></br>
                            Sangli, Maharashtra
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Tab.Pane> },
            { menuItem: 'Update', render: () => <Tab.Pane>
                    <div>
                        <Form>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                                <label>Mobile No</label>
                                <input placeholder='Mobile No' />
                            </Form.Field>
                            <Form.Field>
                                <label>Address</label>
                                <input placeholder='Address' />
                            </Form.Field>
                            <Button className="primary" type='submit'>Submit</Button>
                        </Form>
                    </div>
            </Tab.Pane> },
            { menuItem: 'Grivience', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
          ]

        return(
            <div  className="slide-container">
                <Carousel  fade={true} pause={false}>
                    {/* <Carousel.Item interval={2000}>
                        <img
                        style={{height:"500px",padding:"5px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                        alt="First slide"
                        />
                    </Carousel.Item> */}
                    <Carousel.Item interval={2000}>
                        <img
                        className="d-block w-100"
                        style={{height:"450px",padding:"10px"}}
                        src="https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="tabs">
                    <Tab panes={panes} />
                </div>
            </div>
        )


}
export default UserDashboard; 