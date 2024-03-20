import "./about.scss";
import { motion } from "framer-motion";
import { skills } from "../../helpers/skillsList";

const text = `Hello! My name is Elona, and I'm a junior developer. Recently, I completed programming courses and
            embarked on my journey in the world of development. After my studies, where I had the opportunity to take part in team projects, I became even more convinced that each project is a small story that will see the world with the help of my skills and abilities.I'm enthusiastic about collaborating with others and
            contributing to meaningful projects. I'm eager to learn from
            experienced professionals and grow as a developer.`;

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="about"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <div className="wrapper">
        <div className="aboutContainer">
          <motion.h2 variants={variants}>About Me</motion.h2>
          <p>{text}</p>
          <a
            href="Elona_Savchenko_Junior_Fullstack_developer.pdf"
            tabIndex="0"
            className="linkResume"
            download
          >
            Download CV
          </a>
        </div>
        <div className="skillsContainer">
          <motion.h2 variants={variants}>My skills</motion.h2>
          <ul className="skillsList">
            {skills.map((skill) => (
              <li key={skill.id}>
                <div className="imgWrapper">
                  <img src={skill.svg} />
                </div>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
