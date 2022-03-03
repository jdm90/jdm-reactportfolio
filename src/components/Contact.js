import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser, FaComment, FaEnvelope } from 'react-icons/fa';
import MapComponent from './MapComponent';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8dam9i5',
        'contact_form',
        form.current,
        'ARX5c1nViWD3QKpvp'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Contact</h3>
          </Col>
        </Row>
      </div>
      <Container className="mt-3">
        <p>
          Have a question or want to collaborate on a project? Let's connect!
        </p>
        <Row>
          <Col xs={12} lg={6} className="mt-1">
            <h5>
              Get in <span className="green-text">Touch</span>
            </h5>
            <MapComponent />
          </Col>
          <Col xs={12} lg={6} className="mt-1">
            <h5>
              Contact <span className="green-text">Form</span>
            </h5>
            <div class="container mt-3">
              <Container>
                <form
                  class="row g-3 contact-form"
                  name="contact"
                  id="contact-form"
                  method="post"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div class="col-12">
                    <div class="input-container">
                      <FaUser className="icon" />
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="fullName"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-container">
                      <FaEnvelope className="icon" />
                      <input
                        type="email"
                        class="form-control"
                        name="user_email"
                        id="emailInfo"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-container">
                      <FaComment className="icon" />
                      <textarea
                        class="form-control"
                        name="message"
                        id="comments"
                        placeholder="Message Me"
                        rows="3"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button type="submit" value="Send" class="btn">
                      Send It!
                    </button>
                  </div>
                  <input type="hidden" name="contact" value="contact" />
                </form>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
