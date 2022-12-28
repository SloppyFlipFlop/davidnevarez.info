import React from "react";

import { useInView } from "react-intersection-observer";

import swirlStyles from "./../styles/components/Swirl.module.scss";

const Swirl = ({ color }) => {
  const { ref: swirlRef, inView: isInView } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });
  return (
    <svg
      ref={swirlRef}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 443 443"
      fill="none"
      class="HighlightSection_arrow__pD9lB"
    >
      <path
        id={isInView ? swirlStyles.swirl : ""}
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="4"
        d="M234.104 48.846c57.357 34.352 54.455 101.665 38.795 157.441-12.867 45.832-46.201 91.736-88.637 94.827-33.564 2.445-60.07-26.088-54.578-59.04 7.224-43.346 44.255-68.627 92.717-82.931 35.388-10.445 67.229-11.22 96.127 3.215 23.979 11.977 58.702 45.247 67.638 85.035 12.584 56.032-24.606 121.811-84.87 159.287m0"
      ></path>
      <path
        id={isInView ? swirlStyles.swirl_tip : ""}
        stroke={color}
        stroke-linecap="round"
        stroke-strokeLinejoin="round"
        stroke-width="4"
        d="M234.104 48.846c57.357 34.352 54.455 101.665 38.795 157.441-12.867 45.832-46.201 91.736-88.637 94.827-33.564 2.445-60.07-26.088-54.578-59.04 7.224-43.346 44.255-68.627 92.717-82.931 35.388-10.445 67.229-11.22 96.127 3.215 23.979 11.977 58.702 45.247 67.638 85.035 12.584 56.032-24.606 121.811-84.87 159.287m0 0-1.456-78.521m1.456 78.521 81.194 8.293" // 0-1.456-78.521m1.456 78.521 81.194 8.293"
      ></path>
    </svg>
  );
};

export default Swirl;
