import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiMongodb,
  SiJetbrains,
  SiGithub,
  SiRender,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB Atlas" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains title="JetBrains (PyCharm, DataGrip)" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub title="GitHub" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRender title="Render" />
      </Col>
    </Row>
  );
}

export default Toolstack;
