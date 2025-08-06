import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiExpress,
} from "react-icons/si";

function Techstack() {
  const icons = [
    <DiJava title="Java" />,
    <CgCPlusPlus title="C++" />,
    <DiPython title="Python" />,
    <DiJavascript1 title="JavaScript" />,
    <DiReact title="React.js" />,
    <DiNodejs title="Node.js" />,
    <SiExpress title="Express.js" />,
    <DiMongodb title="MongoDB" />,
    <SiMysql title="MySQL" />,
    <SiFirebase title="Firebase" />,
    <DiGit title="Git" />,
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {icons.map((Icon, idx) => (
        <Col key={idx} xs={4} md={2} className="tech-icons">
          {Icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
