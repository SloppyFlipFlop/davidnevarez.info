import React from "react";
import FadeInCard from "./FadeIn";
import { useInView } from "react-intersection-observer";
import cardStyles from "./../../styles/components/cards/SlideUp.module.scss";

const SlideUpCard = ({ children }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <FadeInCard>
      <div
        ref={cardRef}
        className={`${isInView ? cardStyles.container : cardStyles.hide}`}
      >
        {children}
      </div>
    </FadeInCard>
  );
};

export default SlideUpCard;
