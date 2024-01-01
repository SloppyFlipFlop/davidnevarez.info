import React, { useState, useContext } from "react";
import { ProjectContext } from "@/projectContext";
import Image from "next/image";
import Link from "next/link";

type ProjectLayoutProps = {
  label: string;
  href: string;
  picture: string;
};

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  label,
  href,
  picture,
}: ProjectLayoutProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const projectData = useContext(ProjectContext);
  const { setProjectData } = projectData;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    // setProjectData() to the project that was clicked
    setProjectData(projectData.filter((data: any) => data.name === label));
  };

  return (
    <Link
      href={href}
      className={`flex justify-between items-center`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => handleClick()}
    >
      <h2 className="uppercase text-3xl font-bold my-6 md:my-0">{label}</h2>
      <Image
        src={picture}
        alt="Picture of the project"
        width={250}
        height={200}
        className={`transition-all duration-300 ease-in invisible hidden md:flex ${
          isHovered ? "md:visible scale-100" : "invisible scale-0"
        }`}
      />
    </Link>
  );
};

export default ProjectLayout;
