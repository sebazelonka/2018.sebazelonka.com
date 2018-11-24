import React from "react";
import { navigate } from "gatsby-link";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import styled from "styled-components";

const FormWrapper = styled(Form)`
  input:focus,
  textarea:focus {
    box-shadow: none
    border-color: #1cc;
  }
  textarea {
    box-shadow: none;
  }
  .label {
    margin: 1.25rem 0 0.5rem;
  }
  .main-button {
    font-family: "Exo 2", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    background-image: linear-gradient(30deg, #b4ec51, #00c6d1);
    color: #000;
    padding: 0.75rem 1.5rem;
    border-radius: 15px;
    line-height: 1;
    border: none;
    margin-top: 3rem;
  }
`;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <>
        <FormWrapper
          name="contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <Input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <Label>
              Don’t fill this out:{" "}
              <Input name="bot-field" onChange={this.handleChange} />
            </Label>
          </div>
          <div className="field">
            <Label className="label" htmlFor={"name"}>
              Your name
            </Label>
            <div className="control">
              <Input
                className="input"
                type={"text"}
                name={"name"}
                onChange={this.handleChange}
                id={"name"}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <Label className="label" htmlFor={"email"}>
              Email
            </Label>
            <div className="control">
              <Input
                className="input"
                type={"email"}
                name={"email"}
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <Label className="label" htmlFor={"message"}>
              Message
            </Label>
            <div className="control">
              <Input
                type="textarea"
                name={"message"}
                onChange={this.handleChange}
                id={"email"}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <button className="main-button" type="submit">
              Send
            </button>
          </div>
        </FormWrapper>
      </>
    );
  }
}
