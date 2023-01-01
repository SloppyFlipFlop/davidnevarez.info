import React from "react";

// components
import FadeInCard from "../../cards/FadeIn";
import Swirl from "./../../Swirl";
import Link from "next/link";
import Image from "next/image";

// app context
import { useContext } from "react";
import { AppContext } from "./../../../context/AppContext";

// icons
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// styles
import pageStyles from "./../../../styles/components/pages//home/AboutMeSection.module.scss";

const AboutMeSection = () => {
  const state = useContext(AppContext);
  return (
    <section id={pageStyles.about_section}>
      <FadeInCard>
        {!state.isMobile && (
          <>
            <div
              key={"1"}
              id={pageStyles.swirl1}
              className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
            >
              <Swirl color={"#24c7fd"} />
            </div>

            <div
              key={"2"}
              id={pageStyles.swirl2}
              className={`${pageStyles.background_icon} ${pageStyles.arrowed_swirl}`}
            >
              <Swirl color={"#24c7fd"} />
            </div>
          </>
        )}

        <>
          {state.isMobile ? (
            <svg
              id={pageStyles.sun}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 499 498"
              fill="none"
              class="Form_formDecor__oBaGt"
            >
              <path
                id={pageStyles.sunshine}
                stroke="#ff6b00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity="0.5"
                stroke-width="10"
                d="M249.617 323.258v132.486M234.774 41.862l9.251 132.21m15.948 148.426 18.433 131.174m-72.283-407.74 27.615 129.588m36.452 144.77 36.521 127.38M178.368 53.94l45.358 124.482m56.268 138.28 53.918 121.031M151.929 65.738 214.201 182.7m74.974 129.105 70.212 112.338M127.42 81.055l77.943 107.162m92.233 117.444 85.192 101.504M105.328 99.618l92.027 95.362m107.699 103.437 98.517 88.669M85.997 121.146l104.454 81.561m121.024 87.498 109.908 74.04M69.844 145.092l114.741 66.243m132.067 69.831 119.159 58.032M57.139 171.105l122.887 49.613m140.492 50.786 126.063 40.919M48.233 198.636l128.617 32.018m146.223 30.708 130.481 22.978m-410.29-57.272 131.793 13.869m149.051 10.074 132.484 4.624m-414.296.344 132.414-4.623m148.984-10.766 131.862-13.869M45.335 284.685l130.481-22.978m146.083-31.396 128.617-32.018M52.307 312.767 178.37 271.78m140.286-51.338 122.887-49.683M63.217 339.544l119.09-58.1m131.721-70.387 114.81-66.243M77.643 364.59l109.908-74.109m120.679-88.049 104.454-81.562M95.456 387.291l98.517-88.6m107.215-103.986 92.097-95.293M116.305 407.37l85.193-101.503m91.68-117.857 77.944-107.162M139.708 424.345l70.28-112.337m74.353-129.449L346.544 65.53M165.253 437.87l53.918-121.031m55.643-138.558 45.358-124.482m-127.72 393.939 36.521-127.311m35.83-144.975 27.546-129.587M220.76 453.743l18.433-131.175m15.256-148.565L263.7 41.862"
              ></path>
            </svg>
          ) : (
            <svg
              id={pageStyles.sun}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 499 498"
              fill="none"
              class="Form_formDecor__oBaGt"
            >
              <path
                id={pageStyles.sunshine}
                stroke="#ff6b00"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-opacity="0.4"
                stroke-width="10"
                d="M249.617 323.258v132.486M234.774 41.862l9.251 132.21m15.948 148.426 18.433 131.174m-72.283-407.74 27.615 129.588m36.452 144.77 36.521 127.38M178.368 53.94l45.358 124.482m56.268 138.28 53.918 121.031M151.929 65.738 214.201 182.7m74.974 129.105 70.212 112.338M127.42 81.055l77.943 107.162m92.233 117.444 85.192 101.504M105.328 99.618l92.027 95.362m107.699 103.437 98.517 88.669M85.997 121.146l104.454 81.561m121.024 87.498 109.908 74.04M69.844 145.092l114.741 66.243m132.067 69.831 119.159 58.032M57.139 171.105l122.887 49.613m140.492 50.786 126.063 40.919M48.233 198.636l128.617 32.018m146.223 30.708 130.481 22.978m-410.29-57.272 131.793 13.869m149.051 10.074 132.484 4.624m-414.296.344 132.414-4.623m148.984-10.766 131.862-13.869M45.335 284.685l130.481-22.978m146.083-31.396 128.617-32.018M52.307 312.767 178.37 271.78m140.286-51.338 122.887-49.683M63.217 339.544l119.09-58.1m131.721-70.387 114.81-66.243M77.643 364.59l109.908-74.109m120.679-88.049 104.454-81.562M95.456 387.291l98.517-88.6m107.215-103.986 92.097-95.293M116.305 407.37l85.193-101.503m91.68-117.857 77.944-107.162M139.708 424.345l70.28-112.337m74.353-129.449L346.544 65.53M165.253 437.87l53.918-121.031m55.643-138.558 45.358-124.482m-127.72 393.939 36.521-127.311m35.83-144.975 27.546-129.587M220.76 453.743l18.433-131.175m15.256-148.565L263.7 41.862"
              ></path>
            </svg>
          )}
        </>

        <div id={pageStyles.about_container} className={pageStyles.card}>
          <h2 id={pageStyles.title}>
            About <span>Me</span>
          </h2>
          <p className={pageStyles.description}>
            Hello 👋🏼, my name is Fernando, but I go by David. Now with that out
            of the way, let me tell you a bit about me. So I&#39;m a college
            undergraduate student at Arizona State University studying computer
            science. I&#39;m also a certified Full-Stack Developer, knowing a
            wide range and languages and frameworks. I&#39;m also a member of
            ASU&#39;s CodeDevil, where I&#39;m currently helping to develop a
            new version of the club website under the Next.js framework. Like
            how this website is being built.
          </p>
          <p className={pageStyles.description}>
            However, I&#39;m not just a developer because I also strive to be a
            leader wherever I can. However, although I&#39;m not in a leadership
            position at the moment, I do plan to be in the future. But as of
            now, I&#39;m trying to take part in as many research opportunities
            as I can right now. Since I&#39;m wanting to dive into artificial
            intelligence in the future.
          </p>
          <div id={pageStyles.socials}>
            <Image
              id={pageStyles.personal_image}
              src="/images/personal_image.png"
              alt="Image of David"
              width={100}
              height={100}
            />
            <ul id={pageStyles.social_list}>
              <li>
                <Link
                  href="https://github.com/SloppyFlipFlop"
                  className={pageStyles.link_wrapper}
                >
                  <FaGithub className={pageStyles.icon} />
                  <p className={pageStyles.text}>Github</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/fernando-nevarez-94612b204"
                  className={pageStyles.link_wrapper}
                >
                  <FaLinkedinIn className={pageStyles.icon} />
                  <p className={pageStyles.text}>LinkedinIn</p>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/david_nevarez__/"
                  className={pageStyles.link_wrapper}
                >
                  <FaInstagram className={pageStyles.icon} />
                  <p className={pageStyles.text}>Instagram</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </FadeInCard>
    </section>
  );
};

export default AboutMeSection;
