import React from "react";
import Image from "next/image";
import ImageStack from "./cards/ImageStack";
import Swirl from "./../components/Swirl";
import { useInView } from "react-intersection-observer";

// app context
import { useContext } from "react";
import { AppContext } from "./../context/AppContext";

// styles
// import sectionStyles from "./../styles/components/pages/home/ExtracurricularSection.module.scss";
import desktopStyles from "./../styles/components/photoDivider/desktop.module.scss";
import mobileStyles from "./../styles/components/photoDivider/mobile.module.scss";

const DesktopPhotoDivider = ({ images }) => {
  const { ref: dividerRef, inView: isCardInView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={dividerRef} id={desktopStyles.photo_container}>
      {images?.map((image, index) => {
        return (
          <div
            key={index}
            className={`${
              isCardInView ? desktopStyles.card : desktopStyles.hide
            }`}
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
    </section>
  );
};

const MobilePhotoDivider = ({ images }) => {
  const { ref: dividerRef, inView: isCardInView } = useInView({
    threshold: 0,
  });

  return (
    <section id={mobileStyles.section_conatiner} ref={dividerRef}>
      <div
        id={mobileStyles.swirl}
        className={`${mobileStyles.background_icon} ${mobileStyles.arrowed_swirl}`}
      >
        <Swirl color={"#24c7fd"} threshold={0.3} />
      </div>

      <ul id={mobileStyles.card_wrapper}>
        {images?.map((image, index) => {
          return (
            <li
              key={index}
              className={` ${
                isCardInView ? mobileStyles.card : mobileStyles.hide
              }`}
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
