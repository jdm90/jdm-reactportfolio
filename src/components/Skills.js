import React from 'react';
import { Accordion, Row, Col, Container } from 'react-bootstrap';

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
                title="JavaScript"
                alt="JavaScript"
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../react.svg"
                title="React"
                alt="React"
              />
              <img
                class="techstack-logo px-3"
                src="../../redux.svg"
                title="Redux"
                alt="Redux"
              />
              <img
                class="techstack-logo px-3"
                src="../../html-5.svg"
                title="HTML"
                alt="HTML"
              />
              <img
                class="techstack-logo px-3"
                src="../../css-3.svg"
                title="CSS"
                alt="CSS"
              />
              <img
                class="techstack-logo px-3"
                src="../../bootstrap.svg"
                title="Bootstrap"
                alt="Bootstrap"
              />
              <img
                class="techstack-logo px-3"
                src="../../material-ui.svg"
                title="Material UI"
                alt="Material UI"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Backend</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../nodejs.svg"
                title="NodeJS"
                alt="NodeJS"
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../mongodb.svg"
                title="MongoDB"
                alt="MongoDB"
              />
              <img
                class="techstack-logo px-3"
                src="../../express.svg"
                title="Express"
                alt="Express"
              />
              <img
                class="techstack-logo px-3"
                src="../../python.svg"
                title="Python"
                alt="Python"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tools</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../git-icon.svg"
                title="Git"
                alt="Git"
              />
              <img
                class="techstack-logo px-3 mb-3"
                src="../../github-icon.svg"
                title="GitHub"
                alt="GitHub"
              />
              <img
                class="techstack-logo px-3"
                src="../../bash-icon.svg"
                title="Bash"
                alt="Bash"
              />
              <img
                class="techstack-logo px-3"
                src="../../powershell.svg"
                title="PowerShell"
                alt="PowerShell"
              />
              <img
                class="techstack-logo px-3"
                src="../../postman-icon.svg"
                title="Postman"
                alt="Postman"
              />
              <img
                class="techstack-logo px-3"
                src="../../npm-icon.svg"
                title="NPM"
                alt="NPM"
              />
              <img
                class="techstack-logo px-3"
                src="../../yarn.svg"
                title="Yarn"
                alt="Yarn"
              />
              <img
                class="techstack-logo px-3"
                src="../../google-analytics.svg"
                title="Google Analytics"
                alt="Google Analytics"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Productivity</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../visual-studio-code.svg"
                title="Visual Studio Code"
                alt="Visual Studio Code"
              />
              <img
                class="techstack-logo px-3"
                src="../../office-icon.svg"
                title="Microsoft Office"
                alt="Microsoft Office"
              />
              <img
                class="techstack-logo px-3"
                src="../../dropbox.svg"
                title="Dropbox"
                alt="Dropbox"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Communication</Accordion.Header>
            <Accordion.Body>
              <img
                class="techstack-logo px-3"
                src="../../slack-icon.svg"
                title="Slack"
                alt="Slack"
              />
              <img
                class="techstack-logo px-3"
                src="../../discord-icon.svg"
                title="Discord"
                alt="Discord"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
