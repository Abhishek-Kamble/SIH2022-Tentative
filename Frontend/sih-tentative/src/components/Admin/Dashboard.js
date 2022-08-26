import React, { useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Button,Message } from 'semantic-ui-react';

export default function AdminDashboard() {
    useEffect(() => {
        require("../../CSS/home.css")
    })
    const handleGoHome = () => {
        console.log("In handle");
        window.location.href = "http://localhost:3000/";
    }

    if (localStorage.getItem('role') == '1') {
        return (
            <>
                <div className="LandingPage">
                    <article className="bg__Head">
                        <div className="container2">
                            <div className="titleBox2">
                                <h1 className="entry-title">Property Tax Management System</h1>
                            </div>
                        </div>
                    </article>
                    <div id="latest_news">
                        <div className="container1">
                            <div className="marquee-sibling">
                                LATEST NEWS
                            </div>
                            <div className="marquee">
                                <ul className="marquee-content-items">
                                    <li>Get Discount on your Property Tax - Pay Before 3rd June</li>
                                    <li>You Can Pay your Tax Online / Bank Collection Centres / Cheque / Cash.</li>
                                    <li>2% Penalty Charged on Arrears on 1st day of each month.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="container3">
                        <h1>Services</h1>
                        <div class="row1">
                            <div class="service">
                                {/* <i class="fas fa-laptop-code"></i> */}
                                <img src="/images2/assessment.png" />
                                <h2>Assessment Of Property</h2>
                                <p>
                                    To assess Property tax on Open land and buildings within the jurisdiction of city
                                </p>
                            </div>

                            <div class="service">
                                <img src="/images2/graph-3.png" />
                                <h2>Collection</h2>
                                <p>
                                    To collect Property Tax.
                                </p>
                            </div>
                        </div>
                        <div class="row1">
                            <div class="service">
                                <img src="/images2/PropertyDetails.png" />
                                <h2>CASHLESS PAYMENT OPTIONS</h2>
                                <p>
                                    Convenient ways to pay your tax
                                </p>
                            </div>

                            <div class="service">
                                <img src="/images2/cashless.jpg" />
                                <h2>PROPERTY TAX RECEIPT </h2>
                                <p>
                                    To get Property Tax Receipt.
                                </p>
                            </div>
                        </div>
                    </div>
                    </div>
            </>
        )
    }
    else {
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
