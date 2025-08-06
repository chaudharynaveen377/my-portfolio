import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode, // ✅ Optional: replacing Instagram icon
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Machine learing.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/chaudharynaveen377"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/NaveenK06773626"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/naveen-kumar-2612282a0/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             <li className="social-icons">
  <a
    href="https://leetcode.com/u/chNaveen377"
    target="_blank"
    rel="noreferrer"
    className="icon-colour home-social-icons"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      fill="currentColor"
      width="1.5em"
      height="1.5em"
    >
      <path d="M692.267 722.867a34.133 34.133 0 0 1 0 48.426l-101.547 101.547a34.133 34.133 0 0 1-48.426 0L217.6 547.2a34.133 34.133 0 0 1 0-48.426l324.694-324.694a34.133 34.133 0 0 1 48.426 0l101.547 101.547a34.133 34.133 0 0 1 0 48.426L430.933 512l261.334 210.867zM824.746 512L667.733 384a21.333 21.333 0 1 0-27.307 32.853L757.547 512 640.427 607.147a21.333 21.333 0 1 0 27.307 32.853l157.013-128a21.333 21.333 0 0 0 0-33.707z" />
    </svg>
  </a>
</li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
