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
            <a
              href="https://www.instagram.com/jmiles.raw/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                fluid
                thumbnail
                roundedCircle
                src="https://avatars.githubusercontent.com/u/86698679?v=4"
                className="bio-photo"
              ></Image>
            </a>
          </Col>
          <Col xs={6}>
            <h1>Justin Miles</h1>
            <h6>Full-Stack Developer</h6>
            <Stack className="social-stack mt-3" direction="horizontal" gap={3}>
              <SocialIcon
                bgColor="#fff"
                url="https://linkedin.com/in/milesjustin"
                className="social-icon"
              />
              <SocialIcon
                bgColor="#fff"
                url="https://github.com/jdm90"
                className="social-icon"
              />
              <SocialIcon
                bgColor="#fff"
                url="https://twitter.com/jmiles90"
                className="social-icon"
              />
            </Stack>
          </Col>
        </Row>
      </Container>
      <Container className="about-container mt-3">
        <Row className="about-row">
          <Col className="mt-3" xs={12} lg={6}>
            <h5>
              About <span className="green-text">Me</span>
            </h5>
            <p>
              Hello! I'm Justin Miles. I am a dedicated and determined developer
              fueled by passion and focused on creating effective solutions for
              modern problems. As the challenges we face today continue to
              evolve, so do I.
            </p>
            <a href="../../files/JDM-resume.pdf" download>
              <Button variant="success" type="submit">
                <FaFileDownload /> Download Resume
              </Button>
            </a>
          </Col>
          <Col className="mt-3" xs={12} lg={6}>
            <Table responsive size="sm" className="info-table" borderless>
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
                  <td>
                    <a href="mailto: jdm@mailmasker.com">jdm@mailmasker.com</a>
                  </td>
                </tr>
                <tr>
                  <td>Phone:</td>
                  <td>872-225-2919</td>
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
