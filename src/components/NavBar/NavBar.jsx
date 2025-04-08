import SideBar from "../SideBar/SideBar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Savchenko Elona
        </motion.span>
        <div className="social">
          <a
            href="https://t.me/elonka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Facebook"
          >
            <FaTelegram tabindex="0" className="focus" />
          </a>
          <a
            href="https://www.linkedin.com/in/elona-savchenko-a9a2b586/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to Linkedin"
          >
            <BsLinkedin tabindex="0" className="focus" />
          </a>
          <a
            href="https://github.com/Elonka5"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="link to GitHub"
          >
            <FaGithubSquare
              style={{ width: "46px", height: "46px" }}
              tabindex="0"
              className="focus"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
