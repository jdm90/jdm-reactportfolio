import React from 'react';
import { Accordion, Row, Col } from 'react-bootstrap';

export default function Skills() {
  return (
    <div>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Skills</h3>
          </Col>
        </Row>
      </div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Frontend</Accordion.Header>
          <Accordion.Body>
            JavaScript, React, Redux, React Native, JSX, HTML, CSS, Bootstrap,
            Material UI
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Backend</Accordion.Header>
          <Accordion.Body>Node.js, MongoDB, Express, cPanel</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Tools</Accordion.Header>
          <Accordion.Body>Git, GitHub, Bash, PowerShell</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Design</Accordion.Header>
          <Accordion.Body>
            Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro, Canva
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Productivity</Accordion.Header>
          <Accordion.Body>Microsoft Office</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}