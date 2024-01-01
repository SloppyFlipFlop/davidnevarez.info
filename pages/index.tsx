import { useContext } from "react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoFlowerOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

import { ProjectContext } from "@/projectContext";
import FadeInCard from "@/components/FadeIn";
import ProjectLayout from "@/components/ProjectLayout";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const projectData = useContext(ProjectContext);

  return (
    <main
      className={`${inter.className} flex min-h-screen flex-col items-center justify-between bg-white dark:bg-black overflow-hidden transition-all duration-700 ease-in-out`}
    >
      <header className="flex flex-col w-screen px-4 py-2 text-xl h-screen text-black dark:text-white justify-between mb-16">
        <Navbar />
        <div className=" w-full text-[1.75rem] md:text-left md:text-[4rem] font-bold">
          <motion.h1>
            {"Front-End".split("").map((letter, id) => {
              return (
                <motion.span
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2 * id,
                    delay: 0.5,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.h1 className="md:ml-8 mt-2 md:mt-8">
            {"Website Developer".split("").map((letter, id) => {
              if (letter === " ") {
                return <span key={id}>&nbsp;</span>;
              }
              return (
                <motion.span
                  key={id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2 * id,
                    delay: 0.8,
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              );
            })}
          </motion.h1>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col">
            <div className="flex items-center gap-1 text-xl md:text-2xl">
              <h3>Open to Work</h3>
              <IoFlowerOutline className="animate-[spin_3000ms_linear_infinite]" />
            </div>
            <p className="text-sm md:text-lg">Based in AZ, U.S</p>
          </div>
        </div>
      </header>

      <FadeInCard>
        <div className=" relative after:hidden md:after:flex after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[2rem] after:rotate-[4deg] after:animate-rotate after:bg-gradient-to-b after:from-[#20b5e7] after:to-[#ff6b00] dark:after:border-[2px] dark:after:border-white">
          <div className="relative z-[1] bg-black dark:border-[2px] dark:border-white text-white py-8 px-6 md:px-12 my-12 mx-auto rounded-[2rem] md:w-[70vw] flex flex-col items-start justify-evenly">
            <h2 className="text-[3rem] md:text-[3.5rem] text-center md:text-left font-bold mt-0 uppercase">
              about <span className="bg-text-gradient motion-reduce:">me</span>
            </h2>
            <p className="py-2">
              Greetings! I&#39;m David, an undergraduate student at Arizona
              State University pursuing a degree in Computer Science. As a
              certified Full-Stack Developer, I possess a diverse skillset in
              various coding languages and frameworks. Additionally, I am an
              officer in ASU&#39;s CodeDevil community, where I am leading the
              development of a new version of the club website using Next.js
              framework.
            </p>
            <p className="py-2">
              While I have a passion for development, I also strive to be a
              leader in any way possible. Currently, I hold a leadership
              position as an officer in ASU&#39;s CodeDevil community, where I
              am actively involved in driving the development of new projects
              and initiatives. Additionally, I am actively looking to pursue
              research opportunities to further expand my knowledge in
              artificial intelligence, an area I am eager to explore more in the
              future.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image
                className="rounded-full"
                src={"/images/personal_image.png"}
                alt="Image of David"
                width={150}
                height={150}
              />
              <ul className="grid grid-rows-3">
                <li className="flex items-center">
                  <Link
                    href="https://github.com/SloppyFlipFlop"
                    target="_blank"
                    rel="noopener"
                    className="flex w-full justfiy-start items-center gap-2 text-xl"
                  >
                    <FaGithub />
                    <p className="text-blue dark:text-[#198cb3] dark:hover:text-[#1b99c2] underline hover:text-blue-500	">
                      Github
                    </p>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="https://www.linkedin.com/in/fernando-d-nevarez/"
                    target="_blank"
                    rel="noopener"
                    className="flex w-full justfiy-start items-center gap-2 text-xl"
                  >
                    <FaLinkedinIn />
                    <p className="text-blue dark:text-[#198cb3] dark:hover:text-[#1b99c2] underline hover:text-blue-500	">
                      linkedin
                    </p>
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="https://www.instagram.com/david_nevarez__/"
                    target="_blank"
                    rel="noopener"
                    className="flex w-full justfiy-start items-center gap-2 text-xl"
                  >
                    <FaInstagram />
                    <p className="text-blue dark:text-[#198cb3] dark:hover:text-[#1b99c2] underline hover:text-blue-500	">
                      Instagram
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInCard>

      <FadeInCard>
        <section className="my-20">
          <div className="flex items-center gap-2 text-xl">
            <IoFlowerOutline className="animate-[spin_3000ms_linear_infinite]" />
            <motion.h2
              initial={{ scale: 0, opacity: 0 }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="font-bold uppercase "
            >
              SELECTED WORKS
            </motion.h2>
          </div>
          <motion.ul initial="hidden" animate="visible" className="mt-4">
            {projectData.map((project: any, id: number) => {
              const { name, link, homeImage } = project;
              return (
                <motion.li
                  key={id}
                  className="border-black dark:border-white border-t-[0.5px] w-[80vw] hover:text-orange transition-all duration-500 ease-in-out hover:pl-4 last:border-b-[0.5px]"
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.15 * id }}
                >
                  <ProjectLayout
                    label={name}
                    href={link ? (link as string) : "#"}
                    picture={homeImage}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </section>
      </FadeInCard>
    </main>
  );
}
