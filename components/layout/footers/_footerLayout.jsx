import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeInCard from "../../cards/FadeIn";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import footerStyles from "./../../../styles/components/layout/footers/Footer.module.scss";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <FadeInCard>
      <footer id={footerStyles.footer_container}>
        <h2 id={footerStyles.title}>David Nevarez</h2>
        <ul id={footerStyles.social_link_container}>
          <li className={footerStyles.link_wrapper}>
            <Link href={"https://github.com/SloppyFlipFlop"}>
              <FaGithub className={footerStyles.icon} />
            </Link>
          </li>
          <li className={footerStyles.link_wrapper}>
            <Link
              href={"https://www.linkedin.com/in/fernando-nevarez-94612b204"}
            >
              <FaLinkedinIn className={footerStyles.icon} />
            </Link>
          </li>
          <li className={footerStyles.link_wrapper}>
            <Link href={"https://www.instagram.com/david_nevarez__/"}>
              <FaInstagram className={footerStyles.icon} />
            </Link>
          </li>
        </ul>
        <span id={footerStyles.copyright}>{currentYear}</span>

        <Image
          id={footerStyles.boat}
          src="/boat.svg"
          width={300}
          height={150}
          alt="boat"
        />
        <div class={footerStyles.ocean}>
          <div class={footerStyles.wave}></div>
          <div class={footerStyles.wave}></div>
          <div class={footerStyles.wave}></div>
        </div>
      </footer>
    </FadeInCard>
  );
};

export default Footer;
