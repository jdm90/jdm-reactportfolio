import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Stack,
  Table,
  Button,
} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';
import { FaFileDownload } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <>
      <Container className="bio-header-container">
        <Row className="bio-header-row">
          <Col>
            <Image
              fluid
              thumbnail
              roundedCircle
              src="https://avatars.githubusercontent.com/u/86698679?v=4"
              className="bio-photo"
            ></Image>
          </Col>
          <Col xs={6}>
            <h1>Justin Miles</h1>
            <h6>Full-Stack Developer</h6>
            <Stack className="social-stack mt-3" direction="horizontal" gap={3}>
              <SocialIcon
                bgColor="#fff"
                url="https://linkedin.com/in/milesjustin"
              />
              <SocialIcon bgColor="#fff" url="https://github.com/jdm90" />
              <SocialIcon bgColor="#fff" url="https://twitter.com/jmiles90" />
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container className="about-container">
        <Row className="about-row">
          <Col className="mt-3">
            <h5>
              About <span className="green-text">Me</span>
            </h5>
            <p>
              Hello! I'm Justin Miles. I am a dedicated and determined developer
              fueled by passion and focused on creating effective solutions for
              modern problems. As the challenges we face today continue to
              evolve, so do I.
            </p>
            <Button variant="success">
              <FaFileDownload /> Download Resume
            </Button>
          </Col>
          <Col className="mt-3">
            <Table responsive size="sm" className="info-table">
              <tbody>
                <tr>
                  <td>Age:</td>
                  <td>31</td>
                </tr>
                <tr>
                  <td>Residence:</td>
                  <td>USA</td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>Northbrook, IL</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>jdm@mailmasker.com</td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>555-123-4567</td>
                </tr>
                <tr>
                  <td>Freelance:</td>
                  <td>Available</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
