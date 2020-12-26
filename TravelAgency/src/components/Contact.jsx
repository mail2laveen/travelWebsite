import React, { Component } from 'react';
import {Grid,Col,Image,Row} from 'react-bootstrap';
import FormContact from './FormContact'

import '../Styles/contact.css'
export default class Home extends Component{
    render(){
        return(<div>
            <div className="content-wrapper">    
                <Image src="/assets/img/contact.jpg" />
                <h2 className="heading">Contact Us</h2>              
                
            </div>
               <Grid>
            <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} >
                    <h3>Contact Our Agency</h3>
                    <p>
                    At Friends Travels we want to make sure that your trip is everything you could possibly dream of. Whether you want inspiration and guidance in planning your next adventure or need help with an existing booking, our travel experts are here to help.
Send us an email or give our team a call to book your cabs, plan your adventure or get help with any problems you encounter along the way. Or if you’re in Jeypore, you can visit us in store to speak face to face. Our assistance doesn’t end when you take off either. Our Global Travel Help team are on hand to assist with any issues you may have.
                    </p>
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <h3>Our contacts </h3>
                        <ul className=" contact-list fa-ul">
                            <li><i class="fas fa-map-marker-alt"></i> Prasad Rao Peta 4th Lane, Jeypore, Koraput, Odisha. </li>
                            <li><i class="fas fa-phone"></i> 7894242666</li>
                            <li><i class="fas fa-mobile-alt"></i> 8763976769</li>
                            <li><i class="far fa-envelope"></i> friends.travels@gmail.com</li>                        
                        </ul>
                    
                    </Col>

                    <Col xs={12} sm={4} className="person-wrapper">
                    <h3>Any Questions?</h3>
                    <FormContact/>
                     </Col>
                </Row>
                   </Grid>


        </div>)}}