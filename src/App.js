import React, { useState } from "react";
import data from "./data.json";
import FloatingBackground from "./Backround";
import "./App.css";

function App() {
  // Default language is Finnish ("fi")
  const [language, setLanguage] = useState("fi");

  // Get the content for the selected language
  const content = data[language];

  return (
    <div className="main-container">
      {/* Place the background component first so that it is rendered behind the rest */}
      <FloatingBackground />
      
      <Header links={content.links} setLanguage={setLanguage} />
      <AboutMe about={content.about} />
      <Background background={content.background} skills={content.skills} />
      <Projects projects={content.projects} />
      <Footer footer={content.footer} />
    </div>
  );
}

function Header({ links, setLanguage }) {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href={links.portfolio} target="_blank" rel="noopener noreferrer">
              Portfolio
            </a>
          </li>
        </ul>
      </nav>
      <div className="lang-switch">
        <button onClick={() => setLanguage("en")} className="lang-btn">
          ENG
        </button>
        <button onClick={() => setLanguage("fi")} className="lang-btn">
          FIN
        </button>
      </div>
    </header>
  );
}

function AboutMe({ about }) {
  return (
    <section className="AboutMe" id="about">
      <img
        src={about.image}
        alt={about.imageAlt}
        title={about.imageTitle}
        id="photo"
      />
      <div className="text-container">
        <h2>{about.title}</h2>
        <p>{about.content}</p>
        <br></br>
        <p style={{ fontFamily: "cursive" }}>{about.quote}</p>
      </div>
      
    </section>
  );
}

function Background({ background, skills }) {
  return (
    <section className="Backround" id="background">
      <h2 className="BrHeader">{background.infoTitle}</h2>
      <p>{background.infoContent}</p>
      <h2 className="BrHeader">{background.educationTitle}</h2>
      <p>{background.educationContent}</p>
      <h2 className="BrHeader">{background.skillsTitle}</h2>
      <p>{background.skillsContent}</p>
      <div className="TaidotListaContainer">
        <ul className="TaidotLista">
          {skills.map((skill, index) => (
            <li key={index}>
              {skill.name}{" "}
              <img src={skill.icon} alt={skill.alt} className="skill-icon" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Projects({ projects, skills }) {
  return (
    <section className="Backround" id="projects">
  <h2>{projects.title}</h2>
  <div className="projects-container">
    {projects.items.map((proj, index) => (
      <div className="project-box" key={index}>
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
        {proj.repository && (
          <a
            href={proj.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        )}
        {proj.repository && proj.Demo && <br />}
         {Array.isArray(proj.ExtraLinks) &&
              proj.ExtraLinks.map((x, i) => (
                <a
                  key={i}
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginRight: 8 }}
                >
                  {x.text}
                </a>
              ))}
        {proj.Demo && (
          <a
            href={proj.Demo}
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo
          </a>
        )}
  
        {Array.isArray(proj.Tech) && (
  <div className="tech-icons">
    {proj.Tech.map((x, i) => (
      <a
        key={i}
        href={x.link}
        target="_blank"
        rel="noopener noreferrer"
        className="skill-item"
      >
        <img src={x.icon} alt={x.alt || x.name} className="skill-icon" />
      </a>
    ))}
  </div>
)}

        
      </div>
    ))}
  </div>
</section>
  );
}

function Footer({ footer }) {
  return (
    <footer>
      <p>
        &copy; {footer.year} {footer.name}
      </p>
      <p>{footer.email}</p>
    </footer>
  );
}

export default App;
