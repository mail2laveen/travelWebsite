import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Thumbnail, Grid, Col, Image, Button, Row } from "react-bootstrap";
import "../Styles/home.css";
export default class TourPlace extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/tir.jpg" alt="242x200">
              <h3>Tirathgarh Waterfall</h3>
              <p>
                Jagdalpur, Chhattisgarh, India • On arriving in Jeypore, meet
                our representative who will help you take a transfer to the
                hotel. After you freshen up, leave for Jagdalpur. On your way to
                this beautiful destination, you can enjoy a picnic lunch at any
                of the restaurants. Enjoy the glimpse of beautiful surroundings
                en-route. Jagdalpur is a destination which will make you explore
                the beauty of the unique tribal villages and captivating
                wildlife of Chhattisgarh. On arrival, check-in to the hotel and
                have a comfortable stay at night.{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>

          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/chit.jpg" alt="242x200">
              <h3>The Chitrakoot Falls</h3>
              <p>
                Chitrakoot Falls is fondly known as the "Niagara Falls of
                India". Now what is so great about this place that it has been
                compared to the most magnanimous and beautiful waterfall in the
                world? Located in the Bastar district of Chattisgarh, Chitrakoot
                Falls is a spectacular natural beauty. It falls from a height of
                95 ft and is almost as wide as 985 ft, which is one-third of the
                glorious Niagara Falls. Due to this, it is the widest waterfall
                in India. From a distance, the falls looks so dreamy that you
                might never be able to take your eyes off it!{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>

          <Col xs={12} sm={4} className="place">
            <Thumbnail src="assets/img/places/gupt.jpg" alt="242x200">
              <h3>Gupteswar Cave</h3>
              <p>
                Gupteswar Cave is a city shrine dedicated to Shiva.[1] It is a
                pilgrim site situated about 55 km (34 mi) away Jeypore, Koraput
                District in the state of Odisha, India. It is a limestone cave,
                and its main attraction is the gigantic Shiva Linga which is
                said to be increasing in size. Pilgrims from all over the
                country come here during the Sravana period because the yearly
                Bol Bam yatra is held at this place.{" "}
              </p>
              <p>
                <Button bsStyle="primary">More</Button>
              </p>
            </Thumbnail>
          </Col>
        </Row>
      </Grid>
    );
  }
}
