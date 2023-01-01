import React from "react";

// components
import Image from "next/image";
import FadeInCard from "./../../../cards/FadeIn";
import SlideUpCard from "./../../../cards/SlideUp";
import PhotoDivider from "./../../../PhotoDivider";

// styles
import sectionStyles from "./../../../../styles/components/pages//home/ExtracurricularSections/FBLA.module.scss";

const FBLA = () => {
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
        <div id={sectionStyles.description_container}>
          <h2>Recounting my time</h2>
          <p>
            Recalling my time well in FBLA, I could not emphasize enough on how
            much I have grown as a person because of it and just the overall
            enjoyment memories the organization has allowed me to experience.
            But just to explain a little bit about what i have done while in
            FBLA during my high school career, FBLA has provided me with
            numerous opportunities to develop my leadership and professional
            skills. I have had the chance to participate in various conferences
            and competitions, which have helped me to network with other
            business professionals and learn about the latest trends and
            developments in the industry. Additionally, being a member of The
            Future Business Leaders of America has allowed me to give back to my
            community through various service projects. Overall, my time in The
            Future Business Leaders of America has been extremely rewarding and
            has helped me to grow both personally and professionally.
          </p>
        </div>
      </SlideUpCard>
    </>
  );
};

export default FBLA;
