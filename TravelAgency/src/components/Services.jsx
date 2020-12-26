import React, { Component } from "react";
import { Thumbnail, Grid, Col, Image, Button, Row } from "react-bootstrap";
import "../Styles/services.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Our services</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination among hundreds available.
          </h5>
        </div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-plane-departure fa-7x"></i>
                <h3>Tourist Transportation</h3>
                <p>
                  {" "}
                  Friends Travels has been in the forefront of providing
                  excellent transport services to the discerning tourists from
                  all over the country and abroad for over 4 decades. All the
                  leading tourist destinations are reached by most modern
                  coaches and cabs with highly trained and experienced staff in
                  attendance to cater to the choice requirements of Tourists. In
                  terms of the quality of service and the volume of operations
                  SRS Travels continues to be the leader in the travel and
                  tourism sector with none to match their service levels in the
                  industry. Tourists have the choice of hiring different
                  capacities of coaches and cabs for their customized tours
                  tailored according to their needs.
                </p>

                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-ship fa-7x"></i>
                <h3>Intercity Night Service</h3>
                <p>
                  {" "}
                  Friends Travels is a major player in this segment. Over 200
                  cars are deployed connecting prominent destinations across,
                  Odisha, Karnataka, Goa, Tamil Nadu, Andhra Pradesh. The
                  services are being extended to more and more destinations
                  gradually. Most modern cars with A/C, Non A/C. Air Suspension
                  facilities are deployed for safe and comfortable journey.
                  Passengers can reserve seats using online facility by calling
                  us or they can walk into our nearest branch office and obtain
                  reservations.
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-hotel fa-7x"></i>
                <h3>Tour Packages</h3>
                <p>
                  {" "}
                  Friends Travels has now got into tour packages in a big way
                  and offers a wide variety of packages to various popular
                  destinations catering to all budgets. Our package to the
                  famous temple town of Tirupati is always a big draw.
                  Currently, we have the following packages in our portfolio
                  which can be customized to suit individuals/groups.
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>

            <Col xs={12} sm={3} className="place">
              <Thumbnail>
                <i class="fas fa-sun fa-7x"></i>
                <h3>Premium Cars</h3>
                <p>
                  {" "}
                  We are also into premium cars segment and have been catering
                  to all our corporate client and others. All types of chauffer
                  driven premium sedans such as Mercedes Benz, Audi, BMW, Honda,
                  Toyota, Volkswagen, General Motors, Ford and many other models
                  driven by smart, courteous chauffeurs who are fluent in
                  English and other local languages can be provided. Our drivers
                  go the extra mile to ensure customers are safe and comfortable
                  at all times.
                </p>
                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </Thumbnail>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
