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
    id: 2,
    title: "Cinemania",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316441/Cinemania_jbiozt.png",
    descr: "Team Project. Application for choosing a movie.",
  },
  {
    id: 3,
    title: "Money Guard",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316558/Money_Guard_tdkosr.png",
    descr:
      "An application for keeping records of home accounting.The application helps to keep track of your income and expenses, to receive exchange rates.",
  },
  {
    id: 4,
    title: "Water Tracker",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316599/water_tracker_user_tsefbw.jpg",
    descr:
      "The Water Tracker App is a user-friendly application designed to help individuals monitor and record their daily water intake.",
  },
  {
    id: 5,
    title: "Learn Lingo",
    img: "https://res.cloudinary.com/delucxgla/image/upload/v1710316649/Learn_Lingo_u5ovqq.png",
    descr:
      "An application for keeping records of home accounting.The application helps to keep track of your income and expenses, to receive exchange rates.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.descr}</p>
            <button>See Demo</button>
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
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
