import React, { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface FadeInCardProps {
  children: ReactNode;
}

const FadeInCard: FC<FadeInCardProps> = ({ children }) => {
  const { ref: cardRef, inView: isInView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={cardRef}
      className={`transition-opacity duration-1000 ease-in-out relative ${
        isInView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInCard;
