import React from "react";
import Image from "next/image";
import ImageStack from "./cards/ImageStack";
import FadeInCard from "./cards/FadeIn";
import Swirl from "./../components/Swirl";
import { useInView } from "react-intersection-observer";
import { useContext } from "react";
// context
import { AppContext } from "./../context/AppContext";

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

const MobilePhotoDivider = ({ images }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0,
  });
  return (
    <section id={mobileStyles.section_conatiner} ref={cardRef}>
      {/* <FadeInCard> */}
      <div
        id={mobileStyles.swirl}
        className={`${mobileStyles.background_icon} ${mobileStyles.arrowed_swirl}`}
      >
        <Swirl color={"#24c7fd"} />
      </div>
      {/* </FadeInCard> */}
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
      {/* </FadeInCard> */}
    </section>
  );
};

const PhotoDivider = ({ imagesArray }) => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;
  return (
    <>
      {isMobile ? (
        <MobilePhotoDivider images={imagesArray} />
      ) : (
        <DesktopPhotoDivider images={imagesArray} />
      )}
    </>
  );
};

export default PhotoDivider;
