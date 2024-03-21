/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ye7f2ps", "template_5cc9vct", formRef.current, {
        publicKey: "TCf1aaxVJnomtxfEJ",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h2 variants={variants}>Let's work together</motion.h2>
        <motion.div className="item" variants={variants}>
          <h3>Mail</h3>
          <span>elona539@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h3>Address</h3>
          <span>Kyiv,Ukraine</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h3>Phone</h3>
          <span>+38 (063) 564 53 56</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
