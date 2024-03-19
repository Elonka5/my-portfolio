import "./about.scss";
import { motion } from "framer-motion";
import { skills } from "../../helpers/skillsList";

const text = `Hello! My name is Elona, and I'm a junior developer. Recently, I completed programming courses and
            embarked on my journey in the world of development. As for me, being a developer is a calling to make the digital world interesting, diverse and accessible to the user. After my studies, where I had the opportunity to take part in team projects, I became even more convinced that each project is a small story that will see the world with the help of my skills and abilities.I'm enthusiastic about collaborating with others and
            contributing to meaningful projects. I'm eager to learn from
            experienced professionals and grow as a developer.`;

const motto = `Do you ever find yourself starting work, only to glance at the clock and realize it's already 7:00 PM? That's exactly how I feel when I'm deeply engrossed in crafting websites.`;

const techText = `Technologies I've been working with recently`;

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
          <h2>About Me</h2>
          <p>{text}</p>
        </div>
        <div className="skillsContainer">
          <h2>My skills</h2>
          <p>{techText}</p>
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
      <p>{motto}</p>
    </motion.div>
  );
};

export default About;
