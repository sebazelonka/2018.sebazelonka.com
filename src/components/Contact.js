import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.form`
  input:focus,
  textarea:focus {
    box-shadow: none;
    border-color: #1cc;
  }
  textarea {
    box-shadow: none;
  }
  input,
  textarea {
    width: 100%;
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

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "StaticForms - Contact Form",
    honeypot: "", // if any value received in this field, form submission will be ignored.
    message: "",
    replyTo: "@", // this will set replyTo of email to email address entered in the form
    accessKey: "ee8f6b80-d434-498a-96e0-7a3dbbc5ecfa" // get your access key from https://www.staticforms.xyz
  });

  const [response, setResponse] = useState({
    type: "",
    message: ""
  });

  const handleChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: "success",
          message: "Thank you for reaching out to us."
        });
      } else {
        setResponse({
          type: "error",
          message: json.message
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form"
      });
    }
  };

  return (
    <FormWrapper
      action="https://api.staticforms.xyz/submit"
      method="post"
      onSubmit={handleSubmit}
    >
      <p>{response.message}</p>
      <div className="field">
        <label className="label" htmlFor="name">
          Your Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="email">
          Your Email
        </label>
        <div className="control">
          <input
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field" style={{ display: "none" }}>
        <label className="label" htmlFor="honeypot">
          Title
        </label>
        <div className="control">
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <input type="hidden" name="subject" onChange={handleChange} />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Your Message"
            name="message"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-primary" type="submit">
            Submit
          </button>
        </div>
      </div>
    </FormWrapper>
  );
};

export { Contact };
