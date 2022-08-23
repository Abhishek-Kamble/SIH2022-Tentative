import React from 'react'
import BillGeneration from './Bill_generation';
import { Button, Container } from 'react-bootstrap';

const Bill=() => {
    const printOrder = () => {
        const printableElements = document.getElementById('printme').innerHTML;
        const orderHTML = '<html><head><title></title></head><body>' + printableElements + '</body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHTML;
        window.print();
        document.body.innerHTML = oldPage
    }
    return (
        <div>
            
            <div id="printme">
                <BillGeneration  />
            </div>
            <Container className="print_btn">
                <Button style={{fontSize:'25px', padding:'10px 20px', borderRadius:'2rem'}} onClick={printOrder}>Print</Button>
            </Container>
            
        </div>
    )
  
}
export default Bill
