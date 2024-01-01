import React, { createContext, useState } from "react";

const data = [
  {
    name: "W. P. Carey School of Business",
    link: "/project/wpcarey",
    homeImage: "/images/wpcarey_project.png",
    projectImage: "/images/project/wpcarey.png",
    externalLink: "https://wpcarey.asu.edu/",
    projectFocus: ["Frontend"],
    projectDescription: `Embarking on a transformative project in the dynamic realm of digital innovation, I led the comprehensive redevelopment of a prominent brand's online presence. From meticulously implementing design patterns aligned with brand standards to exploring innovative design concepts translated into seamless web development solutions, every aspect was intricately crafted. Responsibilities included routine content reviews, prompt issue resolution, and the adept use of design prototypes for seamless updates, ensuring optimal functionality. The outcome: a streamlined, engaging online presence exceeding expectations and exemplifying the fusion of creativity and functionality. Explore this digital journey in my portfolio, showcasing the convergence of design and development expertise.`,
  },
  {
    name: "CodeDevils",
    link: "/project/codedevils",
    homeImage: "/images/codedevils_project.png",
    projectImage: "/images/project/codedevils.png",
    externalLink: "https://codedevils.org/",
    projectFocus: ["Frontend", "Backend", "SEO"],
    projectDescription:
      "Undertaking a pivotal role in CodeDevils' website modernization initiative, I led the transition from an outdated codebase to a contemporary web framework. As the driving force behind front-end development, I collaborated seamlessly with a senior web developer overseeing the back-end aspects. My contributions extended to the implementation of cutting-edge web frameworks, integration of libraries, and incorporation of APIs to enhance data management and security. The result was a significant enhancement in website performance, delivering a modern web stack that empowered CodeDevils with an optimized online presence and fortified organizational capabilities. Explore the details of this impactful project, exemplifying the synergy of front-end leadership and technological innovation, within my portfolio.",
  },
  {
    name: "Gopher Courier Express",
    link: "/project/gce",
    homeImage: "/images/gce_project.png",
    projectImage: "/images/project/gce.png",
    externalLink: "https://www.gopherphoenix.com/",
    projectFocus: ["Frontend"],
    projectDescription:
      "Championing the revitalization of Gopher Courier Express's online presence, I spearheaded a comprehensive overhaul of their website. A meticulous performance analysis became the cornerstone, identifying bottlenecks and implementing targeted solutions that resulted in an outstanding 88.9% improvement in website responsiveness. Collaboration with stakeholders played a pivotal role as I translated business requirements into technical solutions, ensuring seamless integration. The culmination of these efforts was the successful delivery of a refreshed website, boasting elevated visual appeal and an enhanced user experience. Delve into the intricacies of this project within my portfolio, showcasing how strategic analysis and collaborative innovation transformed Gopher Courier Express's online landscape.",
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
