import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import { Auth } from "aws-amplify";
import { useAppContext } from "../libs/contextLib";

export default function Login() {
  const { userHasAuthenticated } = useAppContext(); // Context hook via App.js
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Auth.signIn(email, password);
      console.log("Logged in");
      userHasAuthenticated(true);
    } catch (e) {
      console.log(e.message);
    }
  }
  

  return(
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} autoFocus
            onChange={(e)=>{setEmail(e.target.value)}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => {setPassword(e.target.value)}}/>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!validateForm()}>
          Submit
        </Button>
      </Form>
    </div>

  )

}
