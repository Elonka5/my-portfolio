import "./services.scss";
import { motion } from "framer-motion";

export const Services = () => {
  return (
    <motion.div className="services">
      <motion.div className="textContainer">
        <motion.p>
          {" "}
          I focus on helping your brand grow and move forward
        </motion.p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer"></motion.div>
      <motion.div className="listContainer"></motion.div>
    </motion.div>
  );
};
