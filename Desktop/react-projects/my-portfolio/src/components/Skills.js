// import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faGitAlt,
  faPython,
  faJsSquare,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div className="skills">
      <div className="container">
        <div className="skill">
          {" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "#e34c26", fontSize: 100 }}
          />{" "}
          <h3> HTML </h3>{" "}
        </div>{" "}
        <div className="skill">
          {" "}
          <FontAwesomeIcon
            icon={faCss3}
            style={{ color: "#2965f1", fontSize: 100 }}
          />{" "}
          <h3> CSS </h3>{" "}
        </div>{" "}
        <div className="skill">
          {" "}
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ color: "#f0db1f", fontSize: 100 }}
          />{" "}
          <h3> JavaScript </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faSass}
            style={{ color: "#cc6699", fontSize: 100 }}
          />{" "}
          <h3> Sass </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "#0197f6", fontSize: 100 }}
          />{" "}
          <h3> React </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faNode}
            style={{ color: "#0A8754", fontSize: 100 }}
          />{" "}
          <h3> Nodejs </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#000000", fontSize: 100 }}
          />{" "}
          <h3> GitHub </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faGitAlt}
            style={{ color: "#37371f", fontSize: 100 }}
          />{" "}
          <h3> Git </h3>{" "}
        </div>{" "}
        <div className="skill">
          <FontAwesomeIcon
            icon={faPython}
            style={{ color: "#2462f0", fontSize: 100 }}
          />{" "}
          <h3> Python </h3>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Skills;
