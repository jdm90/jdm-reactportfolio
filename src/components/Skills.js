import React from 'react';
import { Accordion, Row, Col, Container } from 'react-bootstrap';
import ProductivityCarousel from './ProductivityCarousel';

export default function Toolbox() {
  return (
    <div>
      <div className="content-header">
        <Row className="content-header-row">
          <Col>
            <h3>Toolbox</h3>
          </Col>
        </Row>
      </div>
      <Container className="mt-3 px-5">
        Below are some of the powerful and innovative tools that I use to build
        web and software solutions for individuals and organizations around the
        globe.
      </Container>
      <Container className="mt-3">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Frontend</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../javascript.svg"
                alt=""
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../react.svg"
                alt=""
              />
              <img class="techstack-logo px-3" src="../../redux.svg" alt="" />
              <img class="techstack-logo px-3" src="../../html-5.svg" alt="" />
              <img class="techstack-logo px-3" src="../../css-3.svg" alt="" />
              <img
                class="techstack-logo px-3"
                src="../../bootstrap.svg"
                alt=""
              />
              <img
                class="techstack-logo px-3"
                src="../../material-ui.svg"
                alt=""
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Backend</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../nodejs.svg"
                alt="nodejs"
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../mongodb.svg"
                alt="mongodb"
              />
              <img
                class="techstack-logo px-3"
                src="../../express.svg"
                alt="express"
              />
              <img
                class="techstack-logo px-3"
                src="../../python.svg"
                alt="python"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tools</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../git-icon.svg"
                alt="git"
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../github-icon.svg"
                alt="github"
              />
              <img
                class="techstack-logo px-3"
                src="../../bash-icon.svg"
                alt="bash"
              />
              <img
                class="techstack-logo px-3"
                src="../../powershell.svg"
                alt="powershell"
              />
              <img
                class="techstack-logo px-3"
                src="../../postman-icon.svg"
                alt="postman"
              />
              <img
                class="techstack-logo px-3"
                src="../../npm-icon.svg"
                alt="npm"
              />
              <img
                class="techstack-logo px-3"
                src="../../yarn.svg"
                alt="yarn"
              />
              <img
                class="techstack-logo px-3"
                src="../../google-analytics.svg"
                alt="googleanalytics"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Productivity</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../visual-studio-code.svg"
                alt="vscode"
              />
              <img
                class="techstack-logo px-3"
                src="../../office-icon.svg"
                alt="office"
              />
              <img
                class="techstack-logo px-3"
                src="../../dropbox.svg"
                alt="dropbox"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Communication</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../slack-icon.svg"
                alt="slack"
              />
              <img
                class="techstack-logo px-3"
                src="../../discord-icon.svg"
                alt="discord"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Test2</Accordion.Header>
            <Accordion.Body>
              <div class="slider">
                <div class="slide-track">
                  <div class="slide">
                    <img
                      class="techstack-logo"
                      src="../../javascript.svg"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img class="techstack-logo" src="../../react.svg" alt="" />
                  </div>
                  <div class="slide">
                    <img class="techstack-logo" src="../../redux.svg" alt="" />
                  </div>
                  <div class="slide">
                    <img class="techstack-logo" src="../../html-5.svg" alt="" />
                  </div>
                  <div class="slide">
                    <img class="techstack-logo" src="../../css-3.svg" alt="" />
                  </div>
                  <div class="slide">
                    <img
                      class="techstack-logo"
                      src="../../bootstrap.svg"
                      alt=""
                    />
                  </div>
                  <div class="slide">
                    <img
                      class="techstack-logo"
                      src="../../material-ui.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Test123</Accordion.Header>
            <Accordion.Body>
              <ProductivityCarousel />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
