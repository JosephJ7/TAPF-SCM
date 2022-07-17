import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Profile.css";

export default function Profile() {
  return (
    <Container fluid className="Box1">
      <Row className="one ">
        <Row>
          <Col className="UserphotoCol">
            <img
              className="Userphoto"
              src="../images/UserPhoto.jpg"
              alt="User_Photo"
            />
          </Col>
          <Col className="UserCol2">
            <Row className="BoxUser">USER DETAILS</Row>
            <Row className="BoxUserDetails">
              <Row className="Userdetails">
                <Col>User ID :</Col>
                <Col>546789321</Col>
              </Row>
              <Row className="Userdetails">
                <Col>Name :</Col>
                <Col>Administrator</Col>
              </Row>
              <Row className="Userdetails">
                <Col>D.O.B :</Col>
                <Col>01/01/1995</Col>
              </Row>
              <Row className="Userdetails">
                <Col>Contact No. :</Col>
                <Col>8888888888</Col>
              </Row>
              <Row className="Userdetails">
                <Col>Address :</Col>
                <Col>Jaipur(Raj.)</Col>
              </Row>
              <Row className="Userdetails">
                <Col>License No. :</Col>
                <Col>RJ145521384</Col>
              </Row>
            </Row>
          </Col>
          {/* <Col className="UserCol3">
            <Row className="BoxUserDetails1">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </Row>
          </Col> */}
        </Row>
      </Row>
      <Row className="two">
        <Row className="BoxVech">VEHICLE DETAILS</Row>
        <Col className="BoxVechDetails">
          <Row className="Vechdetails">
            <Col>Vehicle No. :</Col>
            <Col>RJ 14 SS 1234</Col>
          </Row>
          <Row className="Vechdetails">
            <Col>RC No. :</Col>
            <Col>RJ1412345678</Col>
          </Row>
          <Row className="Vechdetails">
            <Col>Model :</Col>
            <Col>Tata Intra Plus</Col>
          </Row>
          <Row className="Vechdetails">
            <Col>Color :</Col>
            <Col>Yellow</Col>
          </Row>
        </Col>
        <Col></Col>
        {/*<Col className="VechCol2">
          <Row className="BoxVechDetails1">
            <li>RJ 01 SS 1234</li>
            <li>RJ 12345678</li>
            <li>Tata Intra</li>
            <li>Blue</li>
          </Row>
        </Col>*/}
      </Row>
    </Container>
  );
}
