import Introduce from "./components/Introduce/Introduce";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skill/Skill";
import Projects from "./components/Project/Project";

function App() {
  return (
    <div className="bg-darkblue min-h-screen selection:bg-cinnabar selection:text-ivory">
      <Header />
      <Introduce />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
