import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import startup from '../images/startup.png';
import igagencysitephoto from '../images/igagencysitephoto.png';
import rockpaperscissors from '../images/rockpaperscissors.jpg';
import grocerymate from '../images/grocerymate.png';
import js30drumkit from '../images/wbjs30drumkit.jpg';
import lifeinthewild from '../images/lifeinthewildgallery.jpg';
import htmlbiopage from '../images/htmlbiopage.png';
import ihs2 from '../images/screencap.png';
import nucampsitebootstrap from '../images/nucampsitebootstrap.png';

import { SocialIcon } from 'react-social-icons';
import { FaFileDownload } from 'react-icons/fa';

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
        <p>Hello - thank you for checking out my work!</p>
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
                <Card.Img variant="top" src={ihs2} height="200px" />
              </a>
              <Card.Body>
                <Card.Title className="card-header">IHS²</Card.Title>
                <Card.Text>
                  Website for a health supply company that was built and
                  currently maintained on HubSpot.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#hubspot</Card.Footer>
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
                <Card.Title className="card-header">
                  Innovative Group
                </Card.Title>
                <Card.Text>
                  Website for an experiential marketing agency that was built
                  and currently maintained on WordPress.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#wordpress</Card.Footer>
            </Card>
          </Col>
          <Col className="portfolio-column">
            <Card style={{ width: '18rem' }} className="shadow">
              <a
                href="https://brave-pare-24aa0a.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img
                  variant="top"
                  src={nucampsitebootstrap}
                  height="200px"
                />
              </a>
              <Card.Body>
                <Card.Title className="card-header">
                  NuCamp Campsites
                </Card.Title>
                <Card.Text>
                  Mock website for a curated database of best campsites. Built
                  using JavaScript, HTML, CSS, and Bootstrap.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css #bootstrap #javascript</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
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
                <Card.Title className="card-header">Grocery Mate</Card.Title>
                <Card.Text>
                  A grocery list web application built with JavaScript, HTML,
                  and CSS.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css #javascript</Card.Footer>
            </Card>
          </Col>
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
                <Card.Title className="card-header">
                  Rock, Paper, Scissors
                </Card.Title>
                <Card.Text>
                  The classic game of Rock, Paper, Scissors - built with
                  JavaScript, HTML, and CSS.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css #javascript</Card.Footer>
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
                <Card.Title className="card-header">
                  Startup Landing Page
                </Card.Title>
                <Card.Text>
                  A simple, mock, startup event landing page with a Call To
                  Action button that was built with HTML and CSS.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css</Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
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
                <Card.Title className="card-header">
                  JavaScript Drumkit
                </Card.Title>
                <Card.Text>
                  A fun practice project where I created a keyboard drumkit with
                  interactive sounds, using JavaScript, HTML, and CSS.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css #javascript</Card.Footer>
            </Card>
          </Col>
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
                <Card.Title className="card-header">
                  Life in the Wild
                </Card.Title>
                <Card.Text>
                  Simple one-page wildlife gallery built using HTML, CSS, and
                  Flexbox.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css #flexbox</Card.Footer>
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
                <Card.Title className="card-header">
                  First HTML Bio Page
                </Card.Title>
                <Card.Text>
                  My first web dev portfolio project. A simple one page bio
                  website, built using HTML and CSS.
                </Card.Text>
              </Card.Body>
              <Card.Footer>#html #css</Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
