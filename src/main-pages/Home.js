import { Route } from "react-router-dom";

import React from "react";
import "../App.css";
import avatar from "../images/avatar.jpg";
import smile from "../images/smile.png";
import aboutMe from "../images/about-me.png";
import smileHeart from "../images/smile-heart.png";
import home from "../images/home.png";
import woman from "../images/woman.gif";
import linkedin from "../images/linkedin.png";
import insta from "../images/instagram.png";
import email from "../images/email.png";

function Home() {
  return (
    <div className="App">
      <header className="nav-bar">
        <ul>
          <li>
            <a href="/home">
              <img
                src={home}
                alt="smile-icon"
                className="icon"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
          </li>

          <li>
            <a href="/our">
              <img
                src={smileHeart}
                alt="smile-icon"
                className="icon"
                style={{ width: "70px", height: "70px" }}
              />
            </a>
          </li>
        </ul>
      </header>

      <body className="body-flex">
        <div className="grid-body">
          <div className="avatar">
            <img src={avatar} alt="Kim's avatar" />
          </div>

          <div className="skills">
            <p>
              My name is <strong>Kim Trinh</strong>, and I was born in Vietnam.
            </p>
            <p>
              I am a STEM student interested in{" "}
              <strong>Computer Science and Technology</strong>, continuing to
              pursue my education towards my dream career.
            </p>
            <p>
              I enjoy solving problems and thinking critically because we can
              always find better solutions and make informed decisions in
              various aspects of life (computer science course and programming
              teachs me all these).
            </p>
            <p>
              I am committed to continuous learning and working towards computer
              science projects that can have a positive impact on our community.
            </p>
            <img src={smile} alt="smile-icon" className="icon" />
            {/* <img src={squash} alt="smile-icon" className='icon'/> */}
          </div>
        </div>
        <div className="about-me">
          <article>
            <img
              src={woman}
              alt="woman-icon"
              className="icon"
              id="woman"
              style={{ width: "100px", height: "100px" }}
            />
            <img
              src={aboutMe}
              alt="aboutMe-icon"
              className="icon"
              id="about-me"
              style={{ width: "100px", height: "100px" }}
            />
            <h3>Languages and Tools</h3>
            <p className="skills">
              <strong>Languages:</strong> Java, Javascript, TypeScript, Python,
              SQL, C++
            </p>
            <p className="skills">
              <strong>Developement Tools and Libraries:</strong>MySQL, MariaDB,
              HediSQL, PostGreSQL, Postman(REST API), React, React Redux, Django
            </p>
            <p className="skills">
              <strong>IDE:</strong>Visual Studio, Apache Netbeans,Intellij IDEA,
              SpringBoot, Node.js, Xcode ,Eclipse
            </p>
            <p className="skills">
              <strong>Version Control:</strong>Git/Github
            </p>
            <p className="skills">
              <strong>Operation System:</strong> Linux/Unix/Windows
            </p>
            <p className="skills">
              <strong>Other tools:</strong>canva, diagrams.net, figma, QT
              Design(C++)
            </p>
          </article>
        </div>
      </body>

      <footer>
        <div class="container">
          <div class="footer-content">
            <p>&copy; 2023 Kim's Portfolio. All rights reserved.</p>
            <nav>
              <ul className="footer-items">
                <li>
                  <img
                    src={linkedin}
                    alt="linkedin-icon"
                    className="icon"
                    id="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <a
                    href="https://www.linkedin.com/in/kim-trinh-968236165/"
                    className="footer-a"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <img
                    src={insta}
                    alt="linkedin-icon"
                    className="icon"
                    id="linkedin"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <a href="#" className="footer-a">
                    Instagram
                  </a>
                </li>
                <li className="email">
                  <img
                    src={email}
                    alt="linkedin-icon"
                    className="icon"
                    id="linkedin"
                    style={{ width: "28px", height: "28px" }}
                  />
                  <a href="#" className="footer-a">
                    Email:
                  </a>
                  <p className="email-address">mykim250795@gmail.com</p>
                </li>
                <li></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Home;
