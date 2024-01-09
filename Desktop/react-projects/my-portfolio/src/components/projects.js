import React from "react";
import { Link } from "react-router-dom";
import "../sass/style.css";
import { motion } from "framer-motion";
import QrCode from "./images/qrcode.png";
import Space from "./images/space-rourism.png";
import ClipNameboard from "./images/landing-page.png";
import PrayTimes from "./images/pray-times.png";
import Dashboard from "./images/dashboard.png";
import Translator from "./images/translator_adobe_express.svg";
import Sunshine from "./images/sunshine_adobe_express.svg";
import Url from "./images/url-shorting_adobe_express.svg";
import Todo from "./images/TodApp_adobe_express (1).svg";
import Quiz from "./images/quizApp_adobe_express.svg";
import ContryInfo from "./images/rest-api_adobe_express.svg";
// import Dashboard from "./images/dashboard.png";
const Projects = () => {
  //! Framer motion animation
  const container = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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
    <div className="section">
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item} className="project">
          <img src={QrCode} alt="QrCode Generator" />{" "}
          <h3 className="description"> QrCoNamede Generator App </h3>{" "}
          <Link className="link" to="https://qriraqi.com/">
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Space} alt="Space" />
          <h3 className="description"> Space - tourism - website </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/Space-tourism-website/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={ClipNameboard} alt="ClipNameboard" />
          <h3 className="description"> ClipNameboard - landing - page </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/Clipboard-landing-page/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={PrayTimes} alt="PrayTimes" />
          <h3 className="description"> Times - of - prayt </h3>{" "}
          <Link className="link" to="https://mrcode93.github.io/Times-of-pray/">
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Dashboard} alt="Dashboard" />
          <h3 className="description"> social - media - dashboard </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/social-media-dashboard-with-theme-switcher/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Translator} alt="Translator" />
          <h3 className="description"> Translator App </h3>{" "}
          <Link className="link" to="https://mrcode-translator.netlify.app/">
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Sunshine} alt="Sunshine" />
          <h3 className="description"> sunshine website </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/Sunnyside-agency-landing-page/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Url} alt="Url" />
          <h3 className="description"> url - shorting </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/Shortly-URL-shortening-API"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Todo} alt="Todo" />
          <h3 className="description"> ToDo App </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/Todo-app-chalenge-/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={Quiz} alt="Quiz" />
          <h3 className="description"> Quiz App </h3>{" "}
          <Link className="link" to="https://mrcode93.github.io/quiz/">
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
        <motion.div variants={item} className="project">
          <img src={ContryInfo} alt="ContryInfo" />
          <h3 className="description"> Countries info </h3>{" "}
          <Link
            className="link"
            to="https://mrcode93.github.io/REST-Countries-API-/"
          >
            View Project{" "}
          </Link>{" "}
        </motion.div>{" "}
      </motion.div>{" "}
    </div>
    // <footer>
    //   <p>&copy; 2023 Mr.CodeIq</p>
    // </footer>
  );
};

export default Projects;
