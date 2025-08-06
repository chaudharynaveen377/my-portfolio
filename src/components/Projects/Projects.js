import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Jobportal from "../../Assets/Projects/Job-portal.png";
import fleshcard from "../../Assets/Projects/fleshcard.png";
import chatify from "../../Assets/Projects/chatify.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatty (MEARN)"
              description="A full-stack real-time chat application built with the MERN Stack (MongoDB, Express.js, React, Node.js(Socket.io)), enabling users to register, log in, and communicate instantly with others. The app features socket.io for real-time bi-directional messaging and supports private conversations, user authentication, and message persistence."
              ghLink="https://github.com/chaudharynaveen377/chat-app"
              demoLink="https://chat-app-jhjo.onrender.com"
            />
          </Col>

    
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Jobportal}
              isBlog={false}
              title="Job-portal (MERN)"
              description="A full-stack Job Portal application developed using the MERN stack (MongoDB, Express.js, React, Node.js) .enabling users to register, log in, and  connects job seekers with employers. This platform enables users to register as a candidate or recruiter, post and apply for jobs, and manage applications."
              ghLink="https://github.com/chaudharynaveen377/Job_Portal"
              demoLink="https://job-portal-1-zipi.vercel.app/"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fleshcard}
              isBlog={false}
              title="Fleshcard-generator (Machine learning)"
              description="The Flashcard Generator App is a simple and efficient tool designed to help students, learners, and educators create, manage, and practice flashcards for effective learning. With a focus on simplicity and speed, the app allows users to input custom questions and answers, generate interactive flashcards, and enhance their memory through active recall and spaced repetition techniques."
              ghLink="https://github.com/chaudharynaveen377/question_flashcard_generator"
              demoLink="https://question-flashcard-generator.onrender.com"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
