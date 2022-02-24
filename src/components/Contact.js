import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Get In Touch!</h3>
          </Col>
        </Row>
      </div>
      <Container>
        <p>Want to hire me or collab on a project? Let's connect!</p>
        <Row>
          <Col xs={12} lg={6}>
            <h5>Get In Touch!</h5>
          </Col>
          <Col xs={12} lg={6}>
            <h5>Contact Form</h5>
            <div class="container mt-3">
              <form class="row g-3">
                <div class="col-10">
                  <label for="fullName" class="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    required
                  />
                </div>
                <div class="col-10">
                  <label for="emailInfo" class="form-label">
                    E-mail
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="emailInfo"
                    required
                  />
                </div>
                <div class="col-10">
                  <label for="comments" class="form-label">
                    Comments, questions?
                  </label>
                  <textarea
                    class="form-control"
                    id="comments"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div class="col-md-12">
                  <button type="submit" class="btn btn-primary">
                    Send it!
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
