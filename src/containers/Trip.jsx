import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import HorizontalTimeline from "react-horizontal-timeline";
import "./Trip.css";

export default function Trip(props) {
  const [value, setValue] = useState(0);
  const VALUES = ["0", "0", "0", "0"];
  const description = [
    "Kitchen", "School1", "School2", "Kitchen"
  ];
  return (
    <Container className="Box3">
      <Row>
        <Col>
          <Button className="tripbutton1">START TRIP</Button>
        </Col>
        <Col>
          <Button className="tripbutton2">EMERGENCY</Button>
        </Col>
        <Col>
          <Button className="tripbutton3">STOP TRIP</Button>
        </Col>
      </Row>
      <div className="root-div">
        <div className="timeline">
          <HorizontalTimeline
            styles={{ outline: "#DFA867", foreground: "#19295C" }}
            index={value}
            indexClick={(index) => {
              setValue(index);
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">{description[value]}</div>
      </div>
      <Row>
        <Col>
          <output className="tripbutton4">School 1</output>
        </Col>
        <Col>
          <Button className="tripbutton5">ARRIVED</Button>
        </Col>
        <Col>
          <Button className="tripbutton6">DEPARTED</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <output className="tripbutton7">School 2</output>
        </Col>
        <Col>
          <Button className="tripbutton8">ARRIVED</Button>
        </Col>
        <Col>
          <Button className="tripbutton9">DEPARTED</Button>
        </Col>
      </Row>
    </Container>
  );
}
