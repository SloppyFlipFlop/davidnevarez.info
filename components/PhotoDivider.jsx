import React from "react";
import Image from "next/image";
import ImageStack from "./cards/ImageStack";
import FadeInCard from "./cards/FadeIn";
import Swirl from "./../components/Swirl";
import { useInView } from "react-intersection-observer";

// context
import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

import pageStyles from "./../styles/pages/Home.module.scss";

// styles
import desktopStyles from "./../styles/components/photoDivider/desktop.module.scss";
import mobileStyles from "./../styles/components/photoDivider/mobile.module.scss";

const DesktopPhotoDivider = ({ images }) => {
  const { ref: dividerRef, inView: isInView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={dividerRef} id={desktopStyles.photo_container}>
      {/* <ul id={desktopStyles.card_wrapper}> */}
      {images?.map((image, index) => {
        return (
          <div
            key={index}
            className={`${isInView ? desktopStyles.card : desktopStyles.hide}`}
          >
            <ImageStack>
              <Image
                className={`${desktopStyles.photo} ${desktopStyles.odd}`}
                src={image.src}
                alt={image.alt}
                layout="fill"
              />
            </ImageStack>
          </div>
        );
      })}
      {/* </ul> */}
    </section>
  );
};

const MobilePhotoDivider = ({ images, sectionTitle }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0,
  });
  return (
    <section id={mobileStyles.section_conatiner} ref={cardRef}>
      <div
        id={mobileStyles.swirl}
        className={`${mobileStyles.background_icon} ${mobileStyles.arrowed_swirl}`}
      >
        <Swirl color={"#24c7fd"} />
      </div>
      {/* <SlideUpCard> */}
      <FadeInCard>
        <div id={mobileStyles.title_container}>
          <h2 id={mobileStyles.container_title}>{sectionTitle}</h2>
        </div>
      </FadeInCard>

      <div className={pageStyles.background_image_conatiner}>
        <Image
          id={pageStyles.FBLA_logo}
          class={pageStyles.extracurricular_background_image}
          src="/FBLA_Arizona_logo.png"
          alt="FBLA logo"
          layout="fill"
        />
      </div>

      {/* </SlideUpCard> */}
      <ul id={mobileStyles.card_wrapper}>
        {images?.map((image, index) => {
          return (
            <li
              key={index}
              className={` ${isInView ? mobileStyles.card : mobileStyles.hide}`}
            >
              <ImageStack>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  className={mobileStyles.image}
                />
              </ImageStack>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const PhotoDivider = ({ imagesArray, sectionTitle }) => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;
  return (
    <>
      {isMobile ? (
        <MobilePhotoDivider images={imagesArray} sectionTitle={sectionTitle} />
      ) : (
        <DesktopPhotoDivider images={imagesArray} />
      )}
    </>
  );
};

export default PhotoDivider;
