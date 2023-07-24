import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineSchool } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { PiCertificateLight } from "react-icons/pi";
import { AiOutlineContacts } from "react-icons/ai";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => {
          setActiveNav("#");
        }}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome></AiOutlineHome>
      </a>
      <a
        href="#about"
        onClick={() => {
          setActiveNav("#about");
        }}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiUserCircle></BiUserCircle>
      </a>
      <a
        href="#education"
        onClick={() => {
          setActiveNav("#education");
        }}
        className={activeNav === "#education" ? "active" : ""}
      >
        <MdOutlineSchool></MdOutlineSchool>
      </a>
      <a
        href="#projects"
        onClick={() => {
          setActiveNav("#projects");
        }}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <GoProjectSymlink></GoProjectSymlink>
      </a>
      <a
        href="#certificates"
        onClick={() => {
          setActiveNav("#certificates");
        }}
        className={activeNav === "#certificates" ? "active" : ""}
      >
        <PiCertificateLight></PiCertificateLight>
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlineContacts></AiOutlineContacts>
      </a>
    </nav>
  );
};

export default Nav;
