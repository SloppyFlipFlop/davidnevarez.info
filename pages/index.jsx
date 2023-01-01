import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

// context
import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

// components
import FadeInCard from "../components/cards/FadeIn";
import Swirl from "../components/Swirl";
import PhotoDivider from "../components/PhotoDivider";
import SlideUpCard from "../components/cards/SlideUp";

// icons
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

import pageStyles from "../styles/pages/Home.module.scss";

import CloudAnimation from "../components/CloudAnimation";
import AboutMeSection from "../components/pages/home/AboutMeSection";

export default function Home() {
  const { state } = useContext(AppContext);
  const photoDividerImages = [
    {
      src: "/images/David_in_Chicago.jpg",
      alt: "Image of David inside the Shedd Aquarium in Chicago",
    },
    {
      src: "/images/Chicago_towers.jpeg",
      alt: "Image of some buidling towers in Chicago",
    },
    {
      src: "/images/FBLA_Chicago_David.jpg",
      alt: "Image of David at millennium park in Chicago",
    },
  ];
  return (
    <main>
      <section id={pageStyles.hero_section}>
        <FadeInCard>
          <h1>My portfolio Website is currently under construction</h1>
          <p>
            Come back later to see the finished website. But in the meantime,
            here&#39;s a little bit about me.
          </p>
        </FadeInCard>
        <div id={pageStyles.down_arrow}>
          <FaArrowDown />
        </div>
      </section>

      <AboutMeSection />

      <section id={pageStyles.extracurricular_section}>
        <h2 id={pageStyles.section_title}>
          Extracurricular
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 742 26"
            fill="none"
            class="TextBlock_line___naGK"
          >
            <path
              stroke="#C0BFBF"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-opacity="0.4"
              stroke-width="6"
              d="M1 13c22.418 16 44.836 16 67.253 0 22.418-16 44.836-16 67.254 0 22.417 16 44.835 16 67.253 0 22.417-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.253 0 22.418 16 44.836 16 67.254 0 22.418-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.254 0m.214 0c22.417 16 44.835 16 67.253 0"
              // style="mix-blend-mode:multiply"
            ></path>
          </svg>
        </h2>
        <FadeInCard>
          <div className={pageStyles.extracurricular_wrapper}>
            <PhotoDivider
              imagesArray={photoDividerImages}
              sectionTitle={"FBLA"}
            />

            <SlideUpCard>
              <div id={pageStyles.description_container}>
                <h2>Recounting my time</h2>
                <p>
                  Recalling my time well in FBLA, I could not emphasize enough
                  on how much I have grown as a person because of it and just
                  the overall enjoyment memories the organization has allowed me
                  to experience. But just to explain a little bit about what i
                  have done while in FBLA during my high school career, FBLA has
                  provided me with numerous opportunities to develop my
                  leadership and professional skills. I have had the chance to
                  participate in various conferences and competitions, which
                  have helped me to network with other business professionals
                  and learn about the latest trends and developments in the
                  industry. Additionally, being a member of The Future Business
                  Leaders of America has allowed me to give back to my community
                  through various service projects. Overall, my time in The
                  Future Business Leaders of America has been extremely
                  rewarding and has helped me to grow both personally and
                  professionally.
                </p>
              </div>
            </SlideUpCard>
          </div>
        </FadeInCard>
      </section>

      {/* <CloudAnimation
        numClouds={5}
        size={[
          {
            width: 150,
            height: 100,
          },
          {
            width: 200,
            height: 150,
          },
        ]}
        speed={0.25}
      /> */}

      {/* <section id={pageStyles.projects_section}></section> */}
    </main>
  );
}
