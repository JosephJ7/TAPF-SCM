import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import "./Login.css";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [show, setshow] = useState();
  const [linkon, setlinkon] = useState(false);

  function verify() {
    var pw, ur;
    pw = document.getElementById("password").value;
    ur = document.getElementById("userid").value;
    if (pw === "admin" && ur === "admin") {
      setshow(false);
      setlinkon(true);
    } else {
      setshow(true);
      setlinkon(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Container fluid>
      <div className="Box">
        {show ? (
          <div>
            <Form.Label variant="danger" className="Alert">
              Invalid USERID/PASSWORD!! Please try again
            </Form.Label>
          </div>
        ) : (
          ""
        )}
        <div className="final">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="userid" type="text">
              <Form.Label>USERID</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={userid}
                autoComplete="off"
                onChange={(e) => setUserid(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              size="lg"
              controlId="password"
              type="password"
              autoComplete="off"
            >
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type="password"
                value={password}
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              id="loginbutton"
              onClick={verify}
              blocksize="lg"
              type="submit"
            >
              {linkon ? <Redirect to="/profile" /> : ""}
              LOGIN
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}
