import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { IoMdArrowBack } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { Inter } from "next/font/google";

import { ProjectContext } from "@/projectContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

interface ProjectData {
  name: string;
  link: string;
  homeImage: string;
  projectImage: string;
  externalLink: string;
  projectFocus: string[];
  projectDescription: string;
}

const Page: React.FC = () => {
  const router = useRouter();
  const projectData = useContext(ProjectContext);
  const [selectedProjectData, setSelectedProjectData] = useState<
    ProjectData | undefined
  >();

  useEffect(() => {
    const currentPath = window.location.pathname;

    const selectedProjectData = projectData.filter(
      (data: ProjectData) =>
        data.link.toLowerCase() === currentPath.toLowerCase()
    )[0];

    setSelectedProjectData(selectedProjectData);
  }, [projectData]);

  if (selectedProjectData === undefined) return null;

  return (
    <main
      className={`${inter.className} bg-white dark:bg-black min-h-screen transition-all duration-700 ease-in-out`}
    >
      <Navbar />

      <div className="flex flex-col md:grid md:grid-cols-2 w-screen ">
        <section className="h-fit px-4 mb-6 md:sticky md:top-[3rem] md:pl-6">
          <h1 className="text-4xl font-bold uppercase sticky">
            {selectedProjectData.name}
          </h1>
          <ul className="my-3 flex justify-start flex-wrap">
            {selectedProjectData.projectFocus.map((focus: string) => (
              <li
                key={focus}
                className="text-sm uppercase p-2 border w-fit rounded-full border-2 mx-[.2rem] border-black dark:border-white "
              >
                {focus}
              </li>
            ))}
          </ul>
          <p className="mb-6 text-left md:text-left text-base">
            {selectedProjectData.projectDescription}
          </p>
          <Link
            href={selectedProjectData.externalLink}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-2 hover:text-orange  hover:underline  md:w-fit justify-center w-full"
          >
            <p>Go to website</p>
            <MdArrowOutward />
          </Link>
        </section>

        <section className="flex flex-col items-center justify-center">
          <Image
            src={selectedProjectData.projectImage}
            alt="Picture of the project"
            width={300}
            height={200}
            priority
            className="mb-4"
          />
          <Link
            href={"/"}
            className="flex justify-center md:justify-start items-center w-full gap-2"
          >
            <IoMdArrowBack className="text-4xl" />
            <p>Go back to home page</p>
          </Link>
        </section>
      </div>
    </main>
  );
};

export default Page;
