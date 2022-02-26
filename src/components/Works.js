import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Works() {
  return (
    <>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Works</h3>
          </Col>
        </Row>
      </div>
      <Container className="mt-3">
        <p>Hello - welcome to my site!</p>
        <p>Please stay tuned for examples and links to my work, coming soon.</p>
        <p>
          For now, you can check out all my work on{' '}
          <a href="https://www.github.com/jdm90">Github</a>
        </p>
      </Container>
    </>
  );
}
