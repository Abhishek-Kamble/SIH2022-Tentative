import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import axiosconfig from '../../../config';
const BillGeneration = () => {
  const { billid } = useParams()
  const [billData, setBillData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    require("../../../CSS/Bill_generation.css")
    console.log(billid)
    axiosconfig.post('/bill', { property_id: billid }).then((response) => {
      console.log(response)
      setBillData(response.data.Data);
      setLoading(true);
    }).catch((error) => {
      console.log(error)
    })

  }, [loading]);



  if (loading) {
    return (
      <div>
        <Card>
          <Card.Body>
            <div className="invoice-box" style={{ padding: '10px' }}>
              <table style={{ width: '100%' }} className="main_table" cellpadding="0" cellspacing="0">
                <tr className="top_rw">
                  <td colspan="6" style={{ padding: '10px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '0px' }}> Pune Municipalty </h2>
                    <h3 style={{}}> Property Tax Bill </h3>
                  </td>
                </tr>

                <tr className="top">
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

                <tr className="top">
                  <td colspan="3">
                    <table>
                      <td colspan="2">
                        <h4 style={{ marginBottom: '0px' }}> Property No : {billid} </h4>
                      </td>
                      <td style={{ width: '30%', marginRight: '10px' }}>
                        <h4>Property value: {billData.PropertyValue}</h4>
                      </td>
                    </table>
                  </td>
                </tr>
                <tr className="information">
                  <td colspan="3">
                    <table>
                      <tr>
                        <td colspan="2">
                          <h4>Tax Payer name: </h4>  <br />
                          <h6>Sanket Mote</h6>
                        </td>
                        <td colspan="2" style={{ width: '30%', marginRight: '10px' }}>
                          <h4>Address:{billData.property_address} </h4>
                          <h6>Plot No:{billData.land_number} </h6>
                          <h6>Zone: {billData.zone_id}</h6>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <td colspan="3">
                  <table cellspacing="0px" cellpadding="2px">
                    <tr className="heading">
                      <td colspan="3" style={{ width: '60%', textAlign: 'center' }}> Date (From -- To) </td>
                      <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>
                        Residential MulyaPatra
                      </td>
                    </tr>
                    <tr className="item">
                      <td colspan="3" style={{ width: '60%', textAlign: 'center' }}> 10 DEC 2022  to 12 march 2023 </td>
                      <td colspan="3" style={{ width: '40%', textAlign: 'center' }}>
                        2468237892
                      </td>
                    </tr>
                    <tr className="heading">
                      <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> Residential taxes (General)</td>
                      <td style={{ width: '30%', textAlign: 'center' }}>
                        Rate
                      </td>
                      <td colspan="2" style={{ width: '30%', textAlign: 'center' }}>
                        Resident rate
                      </td>
                    </tr>
                    {Object.keys(billData.tax).map((item, index) => {
                      return (<>
                        <tr className="item">
                          <td colspan="3" style={{ width: '40%', textAlign: 'center' }}> {item}</td>
                          <td style={{ width: '30%', textAlign: 'center' }}>
                            {billData.rate[item]}
                          </td>
                          <td colspan="3" style={{ width: '30%', textAlign: 'center' }}>
                            {Math.round(billData.tax[item])}
                          </td>
                        </tr>
                      </>)
                    })}


                   
                  </table>
                </td>

                <tr className="total">
                  <td colspan="3" align="right"> <b> Total Amount in Words : </b> <b> Three Hundred Eighty Rupees Only </b> </td>
                </tr>
                <br></br>
                <hr></hr>
                <br></br>
                <table className="item">
                  <tr className="item">
                    <td colspan="4" style={{ width: '50%', textAlign: 'center' }}>Pay This Amount On or Before</td>
                    <td style={{ width: '30%', textAlign: 'right' }}>
                      15-Dec-2023
                    </td>
                    <td style={{ width: '20%', textAlign: 'right' }}>
                      3070
                    </td>
                  </tr>
                  <tr className="item">
                    <td colspan="4" style={{ width: '50%', textAlign: 'center' }}></td>
                    <td style={{ width: '30%', textAlign: 'right' }}>
                      15-Dec-2023
                    </td>
                    <td style={{ width: '20%', textAlign: 'right' }}>
                    3080
                    </td>
                  </tr>
                  <tr className="item">
                    <td colspan="4" style={{ width: '50%', textAlign: 'center' }}></td>
                    <td style={{ width: '30%', textAlign: 'right' }}>
                      15-Dec-2023
                    </td>
                    <td style={{ width: '20%', textAlign: 'right' }}>
                    3090
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


}
export default BillGeneration
