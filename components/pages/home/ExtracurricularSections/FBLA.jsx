import React from "react";

// components
import Image from "next/image";
import FadeInCard from "./../../../cards/FadeIn";
import SlideUpCard from "./../../../cards/SlideUp";
import PhotoDivider from "./../../../PhotoDivider";

import { useInView } from "react-intersection-observer";

// app context
import { useContext } from "react";
import { AppContext } from "./../../../../context/AppContext";

// styles
import sectionStyles from "./../../../../styles/components/pages//home/ExtracurricularSections/FBLA.module.scss";
import Link from "next/link";
import Swirl from "../../../Swirl";

// award data
const awards = [
  {
    title: "2nd Place at the Regional Level in Marketing",
    recieved: "2021",
    award_level: "Regional",
    description:
      "During my junior year of high school, after joining West-Mec's coding program. I learned that the program had a FBLA chapter and after learning about how much the experince of being in FBLA was. I decided to join and as one of my first competition opportunities , i decided to join the marketing competition. I placed 2nd at the regional level and was able to move on to the state level.",
  },
  {
    title: "Finalist  at the Regional Level for Website Design",
    recieved: "2021",
    award_level: "Regional",
    description:
      "Along with marketing, I also decided to join the website design competition. In which, I placed in the top 5 within my chapter's regional and was able to move on to the state level for Website design.",
  },
  {
    title: "Finalist for Webiste design at State conference",
    recieved: "2021",
    award_level: "State",
    description:
      "During the state level of website design, I was tasked to create a webssite for a local photographer. In which although I did not move on to the national level, I was able to to learn a lot from my first year in FBLA and was able to learn a lot about web development.",
    content: {
      type: "website",
      imageSrc: "/images/project_images/FBLA_State_Website_2021.png",
      imageAlt: "Image of the website I created for the FBLA state conference",
      imageWidth: "20rem",
      imageHeight: "11rem",
      src: "https://sloppyflipflop.github.io/FBLA-State-Project-2021/",
    },
  },
  {
    title: "Recognition of the Chapter through an Award at the State level",
    recieved: "2022",
    award_level: "State",
    description:
      "As my time as Chapter President, one goal I set for myself was to place 1st in online testing throughout our entire state. Along with other goals and with the help and dedication from my whole leadership team. We were able to obtain enough funding through fundrising events and donatntes to allow my entire qualifying chapter members to go to the state and national conference.",
    content: {
      type: "award",
      imageWidth: "10rem",
      imageHeight: "12rem",
      imageSrc: "/images/project_images/FBLA_State_ChapterAward_2022.jpg",
    },
  },
  {
    title:
      "National Qualifier and State Representative for Database Design and Applications ",
    recieved: "2022",
    award_level: "National",
    description:
      "Throughout the year, one goal I set  for myseld was to qualify for the national conference. Which I was able to do in the competitive event of Database Design and Application. So along with the other members of my chapter that qualified, we were able to represent our state at the national conference. Which the national conference was held in Chicago, Illinois.",
  },
];

// card components
const SlideInFromRight = ({ children }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  console.log("isInView", isInView);
  return (
    <div
      ref={cardRef}
      className={`${
        isInView ? sectionStyles.slide_in_from_right : sectionStyles.hide
      }`}
    >
      <FadeInCard>{children}</FadeInCard>
    </div>
  );
};

const FadeIn = ({ children, top, right, left, bottom, zIndex }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  console.log("card is in view", isInView);
  return (
    <div
      ref={cardRef}
      className={`${
        isInView ? sectionStyles.fade_in : sectionStyles.hide_image
      }`}
      style={{
        position: "relative",
        top: top ? top : "unset",
        left: left ? left : "unset",
        right: right ? right : "unset",
        bottom: bottom ? bottom : "unset",
        zIndex: zIndex ? zIndex : "unset",
      }}
    >
      {children}
    </div>
  );
};

// const FLipCard = ({ children, top, right, left, bottom, zIndex }) => {
//   const { ref: cardRef, inView: isInView } = useInView({
//     threshold: 0.8,
//     // triggerOnce: false,
//   });
//   return (
//     <div
//       ref={cardRef}
//       id={sectionStyles.card_container}
//       className={`${
//         isInView ? sectionStyles.flip_card : sectionStyles.hide_card_image
//       }`}
//       style={{
//         position: "absolute",
//         top: top ? top : "unset",
//         left: left ? left : "unset",
//         right: right ? right : "unset",
//         bottom: bottom ? bottom : "unset",
//         zIndex: zIndex ? zIndex : "unset",
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// main component
const FBLA = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className={sectionStyles.title_image_conatiner}>
        <Image
          id={sectionStyles.FBLA_logo}
          class={sectionStyles.extracurricular_background_image}
          src={"/FBLA_Arizona_logo.png"}
          alt="FBLA logo"
          layout="fill"
        />
      </div>

      <FadeInCard>
        <PhotoDivider
          imagesArray={[
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
          ]}
        />
      </FadeInCard>

      <SlideUpCard>
        <div id={sectionStyles.infomation_container}>
          <section className={sectionStyles.section_wrapper}>
            <h2 className={sectionStyles.section_title}>Recounting my time</h2>

            {/* <p>
              Recalling my time well in FBLA, I could not emphasize enough on
              how much I have grown as a person because of it and just the
              overall enjoyment memories the organization has allowed me to
              experience. But just to explain a little bit about what i have
              done while in FBLA during my high school career, FBLA has provided
              me with numerous opportunities to develop my leadership and
              professional skills. I have had the chance to participate in
              various conferences and competitions, which have helped me to
              network with other business professionals and learn about the
              latest trends and developments in the industry. Additionally,
              being a member of The Future Business Leaders of America has
              allowed me to give back to my community through various service
              projects. Overall, my time in The Future Business Leaders of
              America has been extremely rewarding and has helped me to grow
              both personally and professionally.
            </p> */}

            <p>
              Future Business Leaders of America(FBLA) is a organization that
              helps build professional and overall networking skill for
              students. But being apart of this organization also help me
              develope a whole new understanding to what a leader is and what
              allows for a team to strive. When I frist joined FBLA, it was
              during covid and I was not able to take part in in-person events.
              So
            </p>
          </section>

          <section className={sectionStyles.section_wrapper}>
            <h2 className={sectionStyles.section_title}>Awards</h2>
            <ul id={sectionStyles.award_list}>
              {awards.map((award, index) => {
                const { title, recieved, award_level, description, content } =
                  award;

                return (
                  <SlideInFromRight
                    key={index}
                    style={{ animationDelay: `${index * 1}s` }}
                  >
                    <li className={sectionStyles.award_list_item}>
                      <h3 className={sectionStyles.award_title}>{title}</h3>
                      <h4 className={sectionStyles.year_recieved}>
                        {recieved}
                      </h4>
                      <span className={sectionStyles.award_level}>
                        {award_level}
                      </span>
                      <p className={sectionStyles.award_description}>
                        {description}
                      </p>
                      {content && (
                        <div
                          className={sectionStyles.content_container}
                          style={{
                            width: content.imageWidth,
                            height: content.imageHeight,
                          }}
                        >
                          <Image
                            src={content.imageSrc}
                            alt={content.imageAlt}
                            layout="fill"
                            className={sectionStyles.content_image}
                          />
                          {content.type === "website" && (
                            <Link
                              className={sectionStyles.link}
                              href={`${content.src}`}
                            >
                              VIST
                            </Link>
                          )}
                        </div>
                      )}
                    </li>
                  </SlideInFromRight>
                );
              })}
            </ul>
            {/* <div id={sectionStyles.journey_container}>
              <div id={sectionStyles.background_image_container}>
                <FadeIn>
                  <Image
                    className={sectionStyles.medal_icon}
                    id={sectionStyles.certificate}
                    src="/certificate.svg"
                    alt={"certificate"}
                    width={100}
                    height={100}
                  />
                </FadeIn>

                <FadeIn>
                  <Image
                    className={sectionStyles.medal_icon}
                    id={sectionStyles.medal}
                    src="/medalSVG.svg"
                    alt={"medal"}
                    width={100}
                    height={100}
                  />
                </FadeIn>

                <FadeIn>
                  <Image
                    className={sectionStyles.medal_icon}
                    id={sectionStyles.trophy}
                    src="/trophySVG.svg"
                    alt={"medal"}
                    width={150}
                    height={150}
                  />
                </FadeIn>

                <FadeIn>
                  <Image
                    className={sectionStyles.medal_icon}
                    id={sectionStyles.finalist_trophy}
                    src="/finalist_trophy.svg"
                    alt={"finalist trophy"}
                    width={250}
                    height={150}
                  />
                </FadeIn>

                <FadeIn>
                  <div className={sectionStyles.content_wrapper}>
                    <div id={sectionStyles.title}>Chicago</div>
                    <Image
                      id={sectionStyles.city_outline}
                      src="/Chicago_outline.svg"
                      alt={"city"}
                      width={250}
                      height={150}
                    />
                  </div>
                </FadeIn>
              </div>
            </div> */}
          </section>

          {/* Background Images */}

          {/* {!state.isMobile && (
            <div id={sectionStyles.background_image_container}>
              <div id={sectionStyles.wrapper}>
                <FadeIn top={"20%"} left={"0%"}>
                  <Image
                    id={sectionStyles.certificate}
                    src="/certificate.svg"
                    alt={"certificate"}
                    width={100}
                    height={100}
                  />
                </FadeIn>

                <FadeIn top={"30%"} right={"0%"}>
                  <Image
                    id={sectionStyles.medal}
                    src="/medalSVG.svg"
                    alt={"medal"}
                    width={100}
                    height={100}
                  />
                </FadeIn>

                <FadeIn top={"50%"} left={"0%"}>
                  <Image
                    id={sectionStyles.trophy}
                    src="/trophySVG.svg"
                    alt={"medal"}
                    width={150}
                    height={150}
                  />
                </FadeIn>
                <FadeIn top={"70%"} right={"0%"}>
                  <Image
                    id={sectionStyles.finalist_trophy}
                    src="/finalist_trophy.svg"
                    alt={"finalist trophy"}
                    width={250}
                    height={150}
                  />
                </FadeIn>

                <FadeIn bottom={"5%"} left={"0%"}>
                  <div className={sectionStyles.content_wrapper}>
                    <div id={sectionStyles.title}>Chicago</div>
                    <Image
                      id={sectionStyles.city_outline}
                      src="/Chicago_outline.svg"
                      alt={"city"}
                      width={250}
                      height={150}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          )} */}
        </div>
      </SlideUpCard>
    </>
  );
};

export default FBLA;
