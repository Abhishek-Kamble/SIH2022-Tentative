import React, { Component } from 'react'
import Bill_generation from './Bill_generation';

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
            <div>Bill</div>
            <button onClick={printOrder}>print</button>
            <div id="printme">
                <Bill_generation  />
            </div>
        </div>
    )
  
}
export default Bill
