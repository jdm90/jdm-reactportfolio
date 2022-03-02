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
                class="techstack-logo px-3 my-2"
                src="../../javascript.svg"
                title="JavaScript"
                alt="JavaScript"
              />
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../react.svg"
                  title="React"
                  alt="React"
                />
              </a>
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../redux.svg"
                  title="Redux"
                  alt="Redux"
                />
              </a>
              <img
                class="techstack-logo px-3 my-2"
                src="../../html-5.svg"
                title="HTML"
                alt="HTML"
              />
              <a
                href="https://www.w3.org/Style/CSS/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../css-3.svg"
                  title="CSS"
                  alt="CSS"
                />
              </a>
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../bootstrap.svg"
                  title="Bootstrap"
                  alt="Bootstrap"
                />
              </a>
              <a href="https://mui.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../material-ui.svg"
                  title="Material UI"
                  alt="Material UI"
                />
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Backend</Accordion.Header>
            <Accordion.Body>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-1"
                  src="../../nodejs.svg"
                  title="NodeJS"
                  alt="NodeJS"
                />
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 mb-3 my-1"
                  src="../../mongodb.svg"
                  title="MongoDB"
                  alt="MongoDB"
                />
              </a>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-1"
                  src="../../express.svg"
                  title="Express"
                  alt="Express"
                />
              </a>
              <a
                href="https://www.python.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../python.svg"
                  title="Python"
                  alt="Python"
                />
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Tools</Accordion.Header>
            <Accordion.Body>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../git-icon.svg"
                  title="Git"
                  alt="Git"
                />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../github-icon.svg"
                  title="GitHub"
                  alt="GitHub"
                />
              </a>
              <img
                class="techstack-logo px-3 my-2"
                src="../../bash-icon.svg"
                title="Bash"
                alt="Bash"
              />
              <img
                class="techstack-logo px-3 my-2"
                src="../../powershell.svg"
                title="PowerShell"
                alt="PowerShell"
              />
              <a
                href="https://www.postman.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../postman-icon.svg"
                  title="Postman"
                  alt="Postman"
                />
              </a>
              <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../npm-icon.svg"
                  title="NPM"
                  alt="NPM"
                />
              </a>
              <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../yarn.svg"
                  title="Yarn"
                  alt="Yarn"
                />
              </a>
              <img
                class="techstack-logo px-3 my-2"
                src="../../google-analytics.svg"
                title="Google Analytics"
                alt="Google Analytics"
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Productivity</Accordion.Header>
            <Accordion.Body>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../visual-studio-code.svg"
                  title="Visual Studio Code"
                  alt="Visual Studio Code"
                />
              </a>
              <a
                href="https://www.office.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../office-icon.svg"
                  title="Microsoft Office"
                  alt="Microsoft Office"
                />
              </a>
              <a
                href="https://www.dropbox.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../dropbox.svg"
                  title="Dropbox"
                  alt="Dropbox"
                />
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Collaboration</Accordion.Header>
            <Accordion.Body>
              <a href="https://slack.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../slack-icon.svg"
                  title="Slack"
                  alt="Slack"
                />
              </a>
              <a href="https://discord.com/" target="_blank" rel="noreferrer">
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../discord-icon.svg"
                  title="Discord"
                  alt="Discord"
                />
              </a>
              <a
                href="https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  class="techstack-logo px-3 my-2"
                  src="../../microsoft-teams.svg"
                  title="Microsoft Teams"
                  alt="Microsoft Teams"
                />
              </a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
