import React from 'react';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

export default function AboutMe() {
  return (
    <>
      <Container className="bio-header">
        <Row>
          <Col>
            <Image
              fluid
              thumbnail
              roundedCircle
              src="https://avatars.githubusercontent.com/u/86698679?v=4"
              className="bio-photo"
            ></Image>
          </Col>
          <Col xs={8}>
            <h1>Justin Miles</h1>
            <h6>Full-Stack Developer</h6>
            <Stack direction="horizontal" gap={3}>
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
      <Container>
        <Row>
          <Col className="mt-3">
            <h5>ABOUT ME</h5>
            <p>
              Hello! I'm Justin Miles. I am a dedicated and determined developer
              fueled by passion and focused on creating effective solutions for
              modern problems. As the challenges we face today continue to
              evolve, so do I.
            </p>
          </Col>
          <Col className="mt-3">
            <p>Age: 29</p>
            <p>Residence: USA</p>
            <p>Address: Los Angeles, USA</p>
            <p>E-mail: email@example.com </p>
            <p>Phone: +0123 123 456 789</p>
            <p>Freelance: Available</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
