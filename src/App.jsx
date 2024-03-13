// import Test from "./Test";
import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import { Services } from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <NavBar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      {/* <section>Parallax</section> */}
      {/* <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section> */}
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test />
      <Test /> */}
    </div>
  );
};

export default App;
