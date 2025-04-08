import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  //   {
  //     id: 1,
  //     title: "Fresh Box",
  //     img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316819/Fresh_Harvest_Box_pnwhla.png",
  //     descr: "Harvest Shop website with responsive layout and animation.",
  //   },
  {
    id: 1,
    title: "VI-3",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1744102385/0e456032-7712-4510-b2a7-9128226995c3_wdowmw.png",
    descr:
      "Adaptive website to showcase doors, windows, and related products,featuring a minimalist design for easy product exploration.",
    urlLive: "https://vi-3.vercel.app/en",
    // urlCode: "https://github.com/Elonka5/learn-lingo",
  },
  {
    id: 2,
    title: "Envent",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1744102407/05733877-91fe-4a2d-803c-86bcbd061fe6_ceh2iq.png",
    descr:
      "Adaptive multilingual website for an HVAC company.",
    urlLive: "https://envent.vercel.app/en",
    // urlCode: "https://github.com/Elonka5/learn-lingo",
  },

  {
    id: 3,
    title: "Cinemania",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710497818/Hero_bdfqu3.png",
    descr:
      "The project is an application that allows users to browse and filter a large collection of movies. It includes features such as a homepage with trending movies, a catalog page for browsing and searching movies, and a 'My Library' page where users can save movies for later viewing.",
    urlLive: "https://andre29839.github.io/error-404_team_name_not_found/",
    urlCode: "https://github.com/Andre29839/error-404_team_name_not_found",
  },
  {
    id: 4,
    title: "Money Guard",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316558/Money_Guard_tdkosr.png",
    descr:
      "An application for keeping records of home accounting.The application helps to keep track of your income and expenses, to receive exchange rates.",
    urlLive: "https://andre29839.github.io/Props_Patrol/login",
    urlCode: "https://github.com/Andre29839/Props_Patrol",
  },
  {
    id: 5,
    title: "Water Tracker",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316599/water_tracker_user_tsefbw.jpg",
    descr:
      "The Water Tracker App is a user-friendly application designed to help individuals monitor and record their daily water intake.",
    urlLive: "https://yurii2007.github.io/water-tracker/",
    urlCode: "https://github.com/yurii2007/water-tracker",
  },
  {
    id: 6,
    title: "Learn Lingo",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316649/Learn_Lingo_u5ovqq.png",
    descr:
      "LearnLingo is an application of a company that provides online language learning services. The main purpose of the application is to help users find and choose a suitable teacher for their educational needs.",
    urlLive: "https://elonka5.github.io/learn-lingo/",
    urlCode: "https://github.com/Elonka5/learn-lingo",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section id="Portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h3>{item.title}</h3>
            <p>{item.descr}</p>
            <div className="linksWrapper">
              <a href={item.urlLive} target="_blank" rel="noopener noreferrer">
                See Demo
              </a>
              {/* <a href={item.urlCode} target="_blank" rel="noopener noreferrer">
                View Code
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h2>Featured Works</h2>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
