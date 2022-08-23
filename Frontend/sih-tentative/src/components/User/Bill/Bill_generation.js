import React, { Component, useEffect } from 'react'
import { Card } from 'react-bootstrap'

const BillGeneration = () => {
  useEffect(() => {
    require("../../../CSS/Bill_generation.css")
  })
  return (
    <div>
      <Card>
        <Card.Body>
          <div class="invoice-box" style={{padding :'10px'}}>
            <table style={{width:'100%'}} class="main_table" cellpadding="0" cellspacing="0">
              <tr class="top_rw">
                <td colspan="6" style={{padding:'10px',textAlign:'center'}}>
                  <h2 style={{ marginBottom: '0px' }}> Pune Municipalty </h2>
                  <h3 style={{}}> Property Tax Bill </h3>
                </td>
              </tr>
      
              <tr class="top">
                <td colspan="3">
                  <table>
                    <td colspan="2">
                      <h4 style={{ marginBottom: '0px' }}> Bill No : 2546356127327 </h4>
                    </td>
                    <td style={{ width: '30%', marginRight: '10px' }}>
                      <h4>Construction Type: Residential</h4>
                    </td>
                  </table>
                </td>
              </tr>

              <tr class="top">
                <td colspan="3">
                  <table>
                    <td colspan="2">
                      <h4 style={{ marginBottom: '0px' }}> Property No : 2546356127327 </h4>
                    </td>
                    <td style={{ width: '30%', marginRight: '10px' }}>
                      <h4>Property value: 382747686</h4>
                    </td>
                  </table>
                </td>
              </tr>
              <tr class="information">
                <td colspan="3">
                  <table>
                    <tr>
                      <td colspan="2">
                        <h4>Tax Payer name: </h4>  <br />
                        <h6>Shivaji Dinkar Bhide</h6>
                      </td>
                      <td colspan="2" style={{ width: '30%', marginRight: '10px' }}>
                        <h4>Address: </h4>
                        <h6>Plot No: </h6>
                        <h6>Zone: </h6>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <td colspan="3">
                <table cellspacing="0px" cellpadding="2px">
                  <tr class="heading">
                    <td colspan="3" style={{ width: '60%',textAlign:'center' }}> Date (From -- To) </td>
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>
                      Residential MulyaPatra
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '60%', textAlign: 'center' }}> 10 DEC 2022  to 12 march 2023 </td>
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>
                      2468237892
                    </td>
                  </tr>
                  <tr class="heading">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Residential taxes (General)</td>
                    <td  style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="2" style={{ width: '30%', textAlign: 'center' }}>
                      Resident rate
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Water benefit Tax</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      232423
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Seweray cess</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      343232
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Seweray Benefit cess</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                     43332
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Education cess</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      133321
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>Tree cess</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      232321
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Street tax</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      432432
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Employment Gaurantee Tax</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      48324
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>Fire tax</td>
                    <td style={{ width: '30%', textAlign: 'center' }}>
                      Rate
                    </td>
                    <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                      6543672
                    </td>
                  </tr>
                  <tr class="item">
                    <td colspan="4" style={{ width: '60%', textAlign: 'center' }}>Total paid amount</td>
                    <td clospan="2" style={{ width: '40%', textAlign: 'center' }}>
                      Rate
                    </td>
                    
                  </tr>
                </table>
              </td>
              
              <tr class="total">
                <td colspan="3" align="right"> <b> Total Amount in Words : </b> <b> Three Hundred Eighty Rupees Only </b> </td>
              </tr>
              <br></br>
              <hr></hr>
              <br></br>
              <table class="item">
                <tr class="item">
                  <td colspan="4" style={{ width: '50%', textAlign: 'center' }}>Pay This Amount On or Before</td>
                  <td style={{ width: '30%', textAlign: 'right' }}>
                    15-Dec-2023
                  </td>
                  <td style={{ width: '20%', textAlign: 'right' }}>
                    32652262
                  </td>
                </tr>
                <tr class="item">
                  <td colspan="4" style={{ width: '50%', textAlign: 'center' }}></td>
                  <td style={{ width: '30%', textAlign: 'right' }}>
                    15-Dec-2023
                  </td>
                  <td style={{ width: '20%', textAlign: 'right' }}>
                    32652262
                  </td>
                </tr>
                <tr class="item">
                  <td colspan="4" style={{ width: '50%', textAlign: 'center' }}></td>
                  <td style={{ width: '30%', textAlign: 'right' }}>
                    15-Dec-2023
                  </td>
                  <td style={{ width: '20%', textAlign: 'right' }}>
                    32652262
                  </td>
                </tr>
              </table>
            </table>
          </div>

        </Card.Body>
      </Card>
    </div >
  )

}
export default BillGeneration
