import "./app.scss";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="portfolio" />
      </section>
      <section>
        <About />
      </section>
      <Portfolio />
      <section id="Contact" className="contactSection">
        <Contact />
      </section>
    </div>
  );
};

export default App;
