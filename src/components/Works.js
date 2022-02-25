import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';

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
        <p>yoyoyo</p>
        <p>stay tuned for examples and links to my work!</p>
        <p>
          for now, check out my work on github @ https://www.github.com/jdm90
        </p>
        <p>until next time, stay frosty...</p>
        <FaBeer />
      </Container>
    </>
  );
}
