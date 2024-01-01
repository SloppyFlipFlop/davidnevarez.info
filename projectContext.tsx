import React, { createContext, useState } from "react";

const data = [
  {
    name: "W. P. Carey School of Business",
    link: "/project/wpcarey",
    homeImage: "/images/wpcarey_project.png",
    projectImage: "/images/project/wpcarey.png",
    externalLink: "https://wpcarey.asu.edu/",
    projectFocus: ["Frontend", "SEO"],
    projectDescription: `During my time as the Website Coordinator at the W. P. Carey School of Business, I was entrusted with the development and implementation of design patterns and content updates. Embracing the task, I explored innovative design concepts and translated them into visually appealing web development solutions, ensuring alignment with brand standards and guidelines. My role also involved organizing regular web development-based content reviews to identify areas for improvement promptly. I executed design prototypes using development tools, facilitating seamless content updates and optimizing the user experience. Through strategic web development efforts, I successfully streamlined the website's aesthetics, providing the W. P. Carey School of Business with an engaging and modern online presence.

    `,
  },
  {
    name: "CodeDevils",
    link: "/project/codedevils",
    homeImage: "/images/codedevils_project.png",
    projectImage: "/images/project/codedevils.png",
    externalLink: "https://codedevils.org/",
    projectFocus: ["Frontend", "Backend", "SEO"],
    projectDescription:
      "In the dynamic realm of web development at CodeDevils, I assumed the role of Lead Front-End Application Developer and Junior Back-End Developer. Tasked with modernizing the organization's website, I orchestrated the transition from an outdated codebase to a cutting-edge web framework. Collaborating closely with a senior web developer, I spearheaded front-end development efforts, incorporating APIs for enhanced data management and protection. The result was a remarkable increase in website performance, delivering a modern web stack that significantly elevated CodeDevils' online presence. My responsibilities extended beyond coding as I worked collaboratively with team members to define project goals, deliverables, and timelines for this transformative website update.",
  },
  {
    name: "Gopher Courier Express",
    link: "/project/gce",
    homeImage: "/images/gce_project.png",
    projectImage: "/images/project/gce.png",
    externalLink: "https://www.gopherphoenix.com/",
    projectFocus: ["Frontend"],
    projectDescription:
      "At Gopher Courier Express, I served as a Website Developer, leading the charge in enhancing the company's online presence. Tasked with overhauling the website, I conducted a thorough performance analysis, identifying and addressing bottlenecks that resulted in an impressive 88.9% improvement in website responsiveness. Collaborating closely with stakeholders, I translated business requirements into technical solutions and ensured their seamless integration. The culmination of these efforts was the successful delivery of a refreshed website, not only elevating its visual appeal but also significantly enhancing the overall user experience.",
  },
];

export const ProjectContext = createContext<any>(data);

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [projectData, setProjectData] = useState<any>(data);

  return (
    <ProjectContext.Provider value={{ projectData, setProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
};
