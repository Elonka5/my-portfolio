import About from "./components/About/About";
import "./app.scss";
import Contact from "./components/Contact/Contact";
// import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section id="Contact" className="contactSection">
        <Contact />
      </section>
    </div>
  );
};

export default App;
