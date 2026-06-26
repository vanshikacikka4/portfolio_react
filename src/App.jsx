import "./App.css";
import profilePic from "./assets/profile.jpg";

function App() {
  return (
    <>
      <section className="intro-image">
        <img src={profilePic} alt="my pic" />

        <div className="intro-text">
          <h2>Vanshika</h2>

          <p className="role">
            UG Student | Web Development Learner
          </p>

          <p className="desc">
            <i>
              Passionate about electronics, communication systems, and
              emerging technologies.
            </i>
          </p>
        </div>
      </section>

      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="information">

        <div className="about-me" id="about">
          <header>About Me</header>

          <p className="section-text">
            I am a first-year B.Tech Electronics and Communication Engineering
            student with a keen interest in electronics and communication
            systems. Currently learning core concepts and exploring hands-on
            projects to strengthen my fundamentals.
          </p>
        </div>

        <div className="skills" id="skills">
          <header>Skills</header>

          <ul>
            <li>Basic Electronics</li>
            <li>Digital Electronics</li>
            <li>Analog Circuits</li>
            <li>C Programming</li>
            <li>MATLAB (Basics)</li>
            <li>Embedded Systems (Basics)</li>
          </ul>
        </div>

        <div className="projects" id="projects">
          <header>Projects</header>

          <ul>
            <li>
              Automatic Street Light System: Designed using LDR and
              microcontroller to reduce power consumption.
            </li>

            <li>
              Line Follower Robot: Built using IR sensors and motor driver for
              autonomous movement.
            </li>
          </ul>
        </div>

        <div className="education" id="education">
          <header>Education</header>

          <table>
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Percentage</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>B.TECH</td>
                <td>KL University</td>
                <td>2029</td>
                <td>88%</td>
              </tr>

              <tr>
                <td>HSC</td>
                <td>Narayana Junior College</td>
                <td>2025</td>
                <td>94%</td>
              </tr>

              <tr>
                <td>SSLC</td>
                <td>International School</td>
                <td>2023</td>
                <td>83.5%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="certifications" id="certificates">
          <header>Certifications</header>

          <ul>
            <li>Introduction to Electronics - Coursera</li>
            <li>Embedded Systems Basics - NPTEL</li>
            <li>MATLAB for Engineers - MathWorks</li>
          </ul>
        </div>

        <div className="contact-me" id="contact">
          <header>Contact Me</header>

          <ul>
            <li>
              Email:
              <a href="mailto:vanshikacikka4@email.com">
                vanshikacikka4@email.com
              </a>
            </li>

            <li>LinkedIn: linkedin.com/in/vanshika</li>
          </ul>
        </div>
      </section>

      <footer>
        <p>@2029 Vanshika | UG Student Portfolio</p>
      </footer>
    </>
  );
}

export default App;