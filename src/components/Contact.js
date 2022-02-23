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
      </Container>
    </>
  );
}
