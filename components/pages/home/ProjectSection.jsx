import Link from "next/link";
import React from "react";
import Image from "next/image";

// import screenshot from "./../../../util/screenshotScrappingTool.js";

// styles
import projectStyles from "./../../../styles/components/pages/home/ProjectSection.module.scss";

// icons
import {
  SiNextdotjs,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import { FaReact, FaSass, FaPython, FaJava, FaHtml5 } from "react-icons/fa";

const projects = [
  {
    title: "ASU CodeDevil Website",
    getScreenshot: true,
    // image: "/images/project_images/ASU_CodeDevil_Website.png",
    techStack: ["Next.js", "Typescript", "SCSS"],
    image_name: "CodeDevil Website",
    link: "https://codedevils.org/en-us/",
  },
  {
    title: "Gopher Courier Express",
    // image: "/images/project_images/gopher_couriere_express.png",
    descrption:
      "A compelete updated web application for a Gopher Couriere Express",
    techStack: ["Next.js", "Node.js", "SCSS"],
    image_name: "gopher_couriere_express",
    getScreenshot: true,
    link: "https://www.gopherphoenix.com/",
  },
  {
    title: "2022 FBLA Website",
    getScreenshot: false,
    techStack: ["React.js", "HTML5", "SCSS", "Javascript", "MongoDB"],
    link: "https://github.com/SloppyFlipFlop/CS201_Capstone",
  },

  // Will show this once I actually join the project.
  // {
  //   title: "ASU CodeDevil Component List",
  //   getScreenshot: true,
  //   techStack: ["React.js", "Typescript", "SCSS"],
  //   image_name: "CD-Library",
  //   link: "https://asu-codedevils.github.io/CD-Library/",
  // },
];

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
  }
};

const ProjectSection = () => {
  return (
    <section id={projectStyles.section_wrapper}>
      <h2 id={projectStyles.section_title}>Projects</h2>
      <ul id={projectStyles.project_wrapper}>
        {projects.map((project, index) => {
          const {
            title,
            image_name,
            getScreenshot,
            descrption,
            techStack,
            link,
          } = project;
          // console.log(image_name);
          // screenshot(image_name, link);
          return (
            <li key={index} className={projectStyles.list_item}>
              {title && <h3 className={projectStyles.item_title}>{title}</h3>}
              {/* {getScreenshot && (
                <Image
                  src={"/util/project_images/" + "CD-Library" + ".png"}
                  alt={title}
                  width={500}
                  height={300}
                />
              )} */}

              {descrption && (
                <p className={projectStyles.item_des}>{descrption}</p>
              )}

              <Link
                target="_blank"
                className={projectStyles.item_link}
                href={link}
              >
                Vist
              </Link>

              <div id={projectStyles.icon_wrapper}>
                <h2 className={projectStyles.title}>Techology Used:</h2>
                <ul id={projectStyles.icon_list}>
                  {project.techStack.map((stack, index) => {
                    return (
                      <li key={index} className={projectStyles.icon_wrapper}>
                        {getIcon(stack)}
                      </li>
                    ); // get icon has the className of icon
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProjectSection;
