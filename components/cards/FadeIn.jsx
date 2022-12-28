import React from "react";
import { useInView } from "react-intersection-observer";

const FadeInCard = ({ children }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0.1,
  });
  return (
    <div ref={cardRef} id={"card"} className={`${isInView ? "show" : "hide"}`}>
      {children}
      <style jsx>{`
        #card {
          position: relative;
          transition: opacity 1s ease-in-out;
        }

        .show {
          opacity: 1;
        }

        .hide {
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default FadeInCard;
