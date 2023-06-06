import Link from "next/link";
import React from "react";
import Image from "next/image";

// project data
import projects from "./../../../util/projects.json";

// styles
import projectStyles from "./../../../styles/components/pages/home/ProjectSection.module.scss";

// icons
import {
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { FaReact, FaSass, FaPython, FaJava, FaHtml5 } from "react-icons/fa";

const getIcon = (icon) => {
  switch (icon) {
    case "Next.js":
      return <SiNextdotjs className={projectStyles.icon} />;
    case "Node.js":
      return <SiNodedotjs className={projectStyles.icon} />;
    case "React.js":
      return <FaReact className={projectStyles.icon} />;
    case "SCSS":
      return <FaSass className={projectStyles.icon} />;
    case "Javascript":
      return <SiJavascript className={projectStyles.icon} />;
    case "Python":
      return <FaPython className={projectStyles.icon} />;
    case "Java":
      return <FaJava className={projectStyles.icon} />;
    case "Typescript":
      return <SiTypescript className={projectStyles.icon} />;
    case "HTML5":
      return <FaHtml5 className={projectStyles.icon} />;
    case "MongoDB":
      return <SiMongodb className={projectStyles.icon} />;
    case "Prisma":
      return <SiPrisma className={projectStyles.icon} />;
  }
};

const ProjectSection = () => {
  // make a slideshow conatiner that will allow for mobile tounch movement

  return (
    // <div>
    <ul id={projectStyles.container}>
      {projects.map((project) => {
        const { id, link, title, descrption } = project;
        return (
          <li key={id} className={projectStyles.project}>
            <Link href={`${link}`} className={projectStyles.project_wrapper}>
              <h3 className={projectStyles.title}>{title}</h3>
              <p>{descrption}</p>
            </Link>
          </li>
        );
      })}
    </ul>
    // {/* </div> */}
  );
};

export default ProjectSection;
