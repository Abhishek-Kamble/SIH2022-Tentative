import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const LandingPage = () => {
    useEffect(() => {
        require("../CSS/home.css")
    })
    return (
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

            {/* <div className="services">
				<h4>Our Services</h4><h5> </h5><div className="clearfix"> </div>
				<div className="section group">
				<div className="col-md-6 listview_1_of_2">
					<div className="images_1_of_2">
						<div className="listimg listimg_2_of_1">
							  <img src="images2/assessment.png" alt="" />
						</div>
					    <div className="text list_2_of_1">
							<h3>Assessment Of Property</h3>
							<p>To assess Property tax on Open land and buildings within the jurisdiction of Pune Municipal Corporation.
</p>
							<div className="button"><span><a href="https://propertytax.punecorporation.org/Self_Assessment.aspx" target="_blank">Read More</a></span></div>
					   </div>
					   <div className="clearfix"> </div>
				   </div>
			   </div>			
				<div className="col-md-6 listview_1_of_2">
					<div className="images_1_of_2">
						<div className="listimg listimg_2_of_1">
							  <img src="images2/graph-3.png" alt="" />
						</div>
						<div className="text list_2_of_1">
							  <h3>Collection</h3>
							  <p>To collect Property Tax.</p>
							  <div className="button"><span><a href="https://propertytax.punecorporation.org/OnlinePay/PROP_DUES_DETAILS.aspx">Read More</a></span></div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
			
			<div className="section group">
				<div className="col-md-6 listview_1_of_2">
					<div className="images_1_of_2">
						<div className="listimg listimg_2_of_1">
							  <img src="images2/PropertyDetails.png" alt="" />
						</div>
					    <div className="text list_2_of_1">
							<h3>Property Tax Receipt</h3>
							<p>To get Property Tax Receipt.</p>
							<div className="button"><span><a href="https://propertytax.punecorporation.org/Prop_DuesDetails.aspx">Read More</a></span></div>
					   </div>
					  <div className="clearfix"> </div>
				  </div>
			   </div>			
				<div className="col-md-6 listview_1_of_2">
					<div className="images_1_of_2">
						<div className="listimg listimg_2_of_1">
							 <img src="images/cashless.jpg" alt="" />
						</div>
					    <div className="text list_2_of_1">
							<h3>Cashless Payment Options</h3>
							<p>Convenient ways to pay your tax</p>
							  <div className="button"><span><a href="https://propertytax.punecorporation.org/CashlessPayment.aspx">Read More</a></span></div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
            
            

            
             
			</div> */}
        </div>
    );

}

export default withRouter(LandingPage);