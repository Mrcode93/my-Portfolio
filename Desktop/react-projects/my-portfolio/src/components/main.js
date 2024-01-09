// import React from "react";
import Image from "./images/mee.svg";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Main = () => {
  //! Framer motion animation
  const container = {
    hidden: { opacity: 1, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="landing"
    >
      <motion.ul variants={item} className="contact">
        <li>
          <a
            href="https://github.com/Mrcode93"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#adbabd", fontSize: 30 }}
            />{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100041343831580&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#adbabd", fontSize: 30 }}
            />{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a
            href="https://instagram.com/hlaq1"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ color: "#adbabd", fontSize: 30 }}
            />{" "}
          </a>{" "}
        </li>{" "}
        <li>
          <a
            href="mailto:ameralazawi69@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#adbabd", fontSize: 30 }}
            />{" "}
          </a>{" "}
        </li>{" "}
      </motion.ul>{" "}
      <motion.div variants={item} className="name">
        <h1> من انا؟ </h1>{" "}
      </motion.div>{" "}
      <div className="description">
        <motion.h2 variants={item}> مرحبا </motion.h2>{" "}
        <div className="text">
          <motion.p variants={item}>
            انا عامر من العراق لدي القدرة على انشاء مواقع وتطبيقات ويب جميلة
            وعملية.أنا مطور يهتم بالتفاصيل.أجعل الأشياء تبدو جميلة على الإنترنت.{" "}
          </motion.p>{" "}
        </div>{" "}
        <motion.div variants={item} className="button">
          <a href="./images/finalCv.pdf" download>
            رحلتي{" "}
          </a>{" "}
        </motion.div>{" "}
      </div>{" "}
      <div className="image-holder">
        <motion.img variants={item} src={Image} alt="Me" />
      </div>{" "}
    </motion.div>
  );
};

export default Main;
