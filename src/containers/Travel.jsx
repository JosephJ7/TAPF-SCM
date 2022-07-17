import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Redirect, Link } from "react-router-dom";
import Trip from "./Trip";
import "./Travel.css";

export default function Travel() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [to2, setTo2] = useState("");
  const [show, setshow] = useState(false);
  const [show2, setshow2] = useState(false);
  const [linkon, setlinkon] = useState(false);
  const travel = ["Kitchen", "School1", "School2", "Kicthen"];
  function verifynull() {
    var fr, to, to2;
    fr = document.getElementById("travelfrom").value;
    to = document.getElementById("travelto").value;
    if (fr === "" || to === "") {
      setshow2(true);
      setlinkon(false);
    } else if (show === true) {
      to2 = document.getElementById("traveltoex").value;

      if (to2 === "") {
        setshow2(true);
        setlinkon(false);
      } else {
        setshow2(false);
        setlinkon(true);
      }
    } else {
      setshow2(false);
      setlinkon(true);
    }
  }

  function pluscheck() {
    setshow(true);
  }
  function minuscheck() {
    setshow(false);
  }
  return (
    <Container fulid className="Box2">
      {show2 ? (
        <Row>
          <Col></Col>
          <Col>
            <output variant="danger" className="Alert2">
              No Value Entered !!
            </output>
          </Col>
          <Col></Col>
        </Row>
      ) : (
        ""
      )}
      <Row className="Traveldetails">
        <Col className="Details">Travelling From</Col>
        <Col>
          <input
            type="text1"
            name="travelfrom"
            id="travelfrom"
            value={from}
            autoFocus
            autoComplete="off"
            onChange={(e) => setFrom(e.target.value)}
          />
        </Col>
        <Col></Col>
      </Row>

      <Row className="Traveldetails">
        <Col className="Details">Travelling To</Col>
        <Col>
          <input
            type="text1"
            name="travelto"
            id="travelto"
            value={to}
            autoComplete="off"
            onChange={(e) => setTo(e.target.value)}
          />
        </Col>
        <Col>
          <Button className="Plus" onClick={pluscheck}>
            +
          </Button>
        </Col>
      </Row>
      {show ? (
        <Row className="TraveldetailsEx">
          <Col> </Col>
          <Col>
            <input
              type="text1"
              name="traveltoex"
              id="traveltoex"
              value={to2}
              autoComplete="off"
              onChange={(e) => setTo2(e.target.value)}
            />
          </Col>
          <Col>
            <Button className="Minus" onClick={minuscheck}>
              -
            </Button>
          </Col>
        </Row>
      ) : (
        ""
      )}
      <Row>
        <Col></Col>
        <Col>
          <Button className="Confirm" onClick={verifynull}>
            {linkon ? (
              // <Link to={{ pathname: "/Trip", state: travel }} />
              <Redirect
                to={{
                  pathname: "/trip",
                  state: { from: "KIcthen", to: "School1", to2: "School2" }
                }}
              />
            ) : (
              ""
            )}
            CONFIRM
          </Button>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
