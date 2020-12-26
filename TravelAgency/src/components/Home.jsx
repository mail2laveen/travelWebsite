import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Col, Image, Button, Row } from "react-bootstrap";
import TourPlace from "./TourPlace";
import "../Styles/home.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <Grid>
            <Jumbotron>
              <h2>Enjoy Your Dream Vacation</h2>
              <h3>
                Travel to the any corner of the world, without going around in
                circles.
              </h3>
              <Link to="/services">
                <Button bsStyle="primary">More</Button>
              </Link>
            </Jumbotron>
          </Grid>
        </div>
        <Grid>
          <div className="banner text-center">
            <h2>The best agency you can choose</h2>
            <p>
              We are committed to offering travel services of the highest
              quality, combining our energy and enthusiasm with years of
              experience.
            </p>
          </div>

          <TourPlace />

          <Row className="show-grid text-center">
            <div className="testimonial">
              <h1 className="text-center"> What Customers Say</h1>
              <h5 className="text-center">
                Our clients’ testimonials are the best proof of our high level
                of service
              </h5>
            </div>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/l.jpg"
                circle
                className="profile-pic"
              />
              <h3>Laveen</h3>
              <p>
                “Pradeep was an excellent Travel Agent for us and considered our
                unique needs as she planned our itinerary. Every suggestion he
                made was excellent.”{" "}
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/s.jpg"
                circle
                className="profile-pic"
              />
              <h3>Sarthak</h3>
              <p>
                “I would highly recommend Pradeep because everything on my month
                long trip to India went without a hitch.”
              </p>
            </Col>

            <Col xs={12} sm={4} className="person-wrapper">
              <Image
                src="/assets/img/testimony/v.jpg"
                circle
                className="profile-pic"
              />
              <h3>Vishwas</h3>
              <p>
                “I would highly recommend Pradeep because of his exprince and
                expertices in entire Koraput district area.”{" "}
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
