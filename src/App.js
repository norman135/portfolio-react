import './index.css'
import Header from './components/Header';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Header/>
      <Intro/>
      <div className="title-divider">
          <hr/>
          <h1 className="section-title">SKILLS</h1>
      </div>
      <Skills/>
      <div className="title-divider">
          <hr/>
          <h1 className="section-title">SERVICES</h1>
      </div>
      <Services/>
      <div className="title-divider">
          <hr/>
          <h1 className="section-title">PROJECTS</h1>
      </div>
      <Projects/>
      <div className="title-divider">
          <hr/>
          <h1 className="section-title">CONTACT ME</h1>
      </div>
      <Contact/>
    </div>
  );
}

export default App;
