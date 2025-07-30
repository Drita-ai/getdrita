import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaSun, FaMoon, FaFileAlt } from 'react-icons/fa';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="portfolio-container">
      <div className="top-bar">
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/alok-kumar-05136222b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Drita-ai" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://docs.google.com/document/d/1oh0HfZLyIskvJMcy7gDqHJv1cJzIDlLTRuObd6T1r_s/edit?tab=t.0" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFileAlt />
          </a>
        </div>

        <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>

      <main className="portfolio-content">
        <header className="intro">
          <h1>Alok kr.</h1>
          <h2>Novice Full Stack Developer</h2>
        </header>

        <section className="projects">
          <h2>Projects</h2>

          <div className="project-item">
            <h3><a href="#" className="project-link">cookedcourse</a></h3>
            <p>Curates a course from YouTube of your syllabus, built using <span>React</span>, <span>Tailwind</span> & <span>YouTube API v3</span></p>
          </div>
        </section>

        <footer className="contact">
          <h2>Get In Touch</h2>
          <p>I'm currently available for freelance work or new opportunities. Feel free to reach out.</p>
          <a href="mailto:get.alokkr@gmail.com" className="email-link">get.alokkr@gmail.com</a>
        </footer>
      </main>
    </div>
  );
}

export default App;