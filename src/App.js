import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import { BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
