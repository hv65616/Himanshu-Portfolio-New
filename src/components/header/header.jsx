import React from "react";
import "./header.css";
import Resume from "../../assests/resume.pdf";
import Me from "../../assests/me7.png";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Himanshu Verma</h1>
        <h5 className="text-light">Student | Programmer | Backend Developer</h5>
        <div className="cta">
          <a href={Resume} download className="btn">
            Download Resume
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header_socials">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <BsLinkedin></BsLinkedin>
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <BsGithub></BsGithub>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <BsInstagram></BsInstagram>
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="My_Image"></img>
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default header;
