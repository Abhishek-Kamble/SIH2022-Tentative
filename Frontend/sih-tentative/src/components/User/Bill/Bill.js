import React from 'react'
import BillGeneration from './Bill_generation';
import { Button, Container } from 'react-bootstrap';
import { Message } from 'semantic-ui-react'

const Bill = () => {
    const printOrder = () => {
        const printableElements = document.getElementById('printme').innerHTML;
        const orderHTML = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHTML;
        window.print();
        document.body.innerHTML = oldPage
    }
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }

    //razorpay integration
    const confirmPayment = () => {

    }
    const ApiForRazorpay = async () => {
        displayRazorpay();
    }

    const displayRazorpay = async (e) => {
        e.event.preventDefault();
        console.log(process.env.REACT_APP_API_KEY_RAZORPAY);
        const options = {
            key: process.env.REACT_APP_API_KEY_RAZORPAY,
            currency: "INR",
            amount: 1 * 100,
            name: "Egov",
            image: "https://live-server-818.wati.io/data/logo/theblingbag.myshopify.com.png?24655",

            "handler": function (response) {
                alert("pament successfull");
                confirmPayment();

            },
            "prefill": {
                name: "EGov"
            }
        };
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        paymentObject.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });



    }
    if (localStorage.getItem('role') == '5') {
        return (
            <div>

                <div id="printme">
                    <BillGeneration />
                </div>
                <Container className="print_btn">
                    <Button style={{ fontSize: '25px', padding: '10px 20px', borderRadius: '2rem' }} onClick={printOrder}>Print</Button>
                </Container>

            </div>
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


export default Bill
