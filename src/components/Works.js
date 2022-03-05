import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import startup from '../images/startup.png';
import igagencysitephoto from '../images/igagencysitephoto.png';
import rockpaperscissors from '../images/rockpaperscissors.jpg';
import grocerymate from '../images/grocerymate.png';
import js30drumkit from '../images/wbjs30drumkit.jpg';
import lifeinthewild from '../images/lifeinthewildgallery.jpg';
import htmlbiopage from '../images/htmlbiopage.png';

export default function Experiences() {
  return (
    <>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Experiences</h3>
          </Col>
        </Row>
      </div>
      <Container className="mt-3">
        <p>Hello - thank you for checking out some of my work!</p>
        <p>
          As always, you can follow what I'm working on over at{' '}
          <a href="https://www.github.com/jdm90">Github</a> as well.
        </p>
      </Container>
      <Container className="experiences-container my-3">
        <Row className="portfolio-row">
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a href="https://www.ihs2.com/" target="_blank" rel="noreferrer">
                <Card.Img
                  variant="top"
                  src="../images/screencap.png"
                  height="200px"
                />
              </a>
              <Card.Body>
                <Card.Title>IHS²</Card.Title>
                <Card.Text>
                  Website for a health supply company that was built and
                  currently maintained on HubSpot.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://www.innovativegroup.agency"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={igagencysitephoto}
                  height="200px"
                />
              </a>
              <Card.Body>
                <Card.Title>Innovative Group</Card.Title>
                <Card.Text>
                  Website for an experiential marketing agency that was built
                  and currently maintained on WordPress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/startup-of-the-year/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img variant="top" src={startup} height="200px" />
              </a>
              <Card.Body>
                <Card.Title>Startup Landing Page</Card.Title>
                <Card.Text>
                  A simple, mock, startup event landing page with a Call To
                  Action button that was built with HTML and CSS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/rockpaperscissors/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={rockpaperscissors}
                  height="200px"
                />
              </a>
              <Card.Body>
                <Card.Title>Rock, Paper, Scissors</Card.Title>
                <Card.Text>
                  The classic game of Rock, Paper, Scissors - built with
                  JavaScript, HTML, and CSS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/grocerymate/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img variant="top" src={grocerymate} height="200px" />
              </a>
              <Card.Body>
                <Card.Title>Grocery Mate</Card.Title>
                <Card.Text>
                  A grocery list web application built with JavaScript, HTML,
                  and CSS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/wb-js30-drumkit/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img variant="top" src={js30drumkit} height="200px" />
              </a>
              <Card.Body>
                <Card.Title>JavaScrip Drumkit</Card.Title>
                <Card.Text>
                  A fun practice project where I created a keyboard drumkit with
                  interactive sounds, using JavaScript, HTML, and CSS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/lifeinthewild/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img variant="top" src={lifeinthewild} height="200px" />
              </a>
              <Card.Body>
                <Card.Title>Life in the Wild</Card.Title>
                <Card.Text>
                  Simple one-page wildlife gallery built using HTML, CSS, and
                  Flexbox.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://jdm90.github.io/jmileshtmlbio/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img variant="top" src={htmlbiopage} height="200px" />
              </a>
              <Card.Body>
                <Card.Title>Life in the Wild</Card.Title>
                <Card.Text>
                  My first web dev portfolio project. A simple one page bio
                  website, built using HTML and CSS.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
