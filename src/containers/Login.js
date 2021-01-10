import Form from "react-bootstrap/Form";
import LoaderButton from "../components/LoaderButton";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { Auth } from "aws-amplify";
import "./Login.css";
import { onError } from "../libs/errorLib";

export default function Login() {
  const history = useHistory();
  const { userHasAuthenticated } = useAppContext(); // Context hook via App.js
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({email="",password=""})



  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await Auth.signIn(email, password);
      console.log("Logged in");
      userHasAuthenticated(true);
      history.push("/")
    } catch (e) {
      onError(e)
      setIsLoading(false);
    }
  }
  

  return(
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={fields.email} autoFocus
            onChange={handleFieldChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={fields.password}
            onChange={handleFieldChange}/>
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>

      </Form>
    </div>

  )

}
