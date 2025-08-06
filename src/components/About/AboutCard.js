import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Naveen Kumar</span>
            {" "}from <span className="purple">Hathras, Uttar Pradesh, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science at Galgotias University.
            <br />
            I’m a passionate MERN Stack Developer and a DSA enthusiast, actively building full-stack projects and contributing to open source.
            <br />
            <br />
            I have solved <span className="purple">450+ Data Structures and Algorithms</span> problems on{" "}
            <a href="https://leetcode.com/chaudharynaveen377/" target="_blank" rel="noopener noreferrer" className="purple">
              LeetCode
            </a>.
            <br />
            <br />
            Apart from coding, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Sharing tech content and learning daily
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tark Vitark karna sab time pass h, Asli gyan to Anubhav Karne me h!"
          </p>
          <footer className="blockquote-footer">Naveen Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
