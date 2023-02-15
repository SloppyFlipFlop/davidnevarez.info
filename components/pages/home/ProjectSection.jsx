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
                  {techStack.map((stack, index) => {
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
      <Link href="/projects" id={projectStyles.project_link}>
        <h3>See More Projects</h3>
      </Link>
    </section>
  );
};

export default ProjectSection;
