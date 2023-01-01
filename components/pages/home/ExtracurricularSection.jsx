import React from "react";

// components
import FBLA from "./ExtracurricularSections/FBLA";

// styles
import sectionStyles from "./../../../styles/components/pages//home/ExtracurricularSection.module.scss";

const ExtracurricularSection = () => {
  return (
    <section id={sectionStyles.extracurricular_section}>
      <h2 id={sectionStyles.section_title}>
        Extracurriculars
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 742 26"
          fill="none"
          class="TextBlock_line___naGK"
        >
          <path
            stroke="#C0BFBF"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-opacity="0.4"
            stroke-width="6"
            d="M1 13c22.418 16 44.836 16 67.253 0 22.418-16 44.836-16 67.254 0 22.417 16 44.835 16 67.253 0 22.417-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.253 0 22.418 16 44.836 16 67.254 0 22.418-16 44.835-16 67.253 0s44.836 16 67.253 0c22.418-16 44.836-16 67.254 0m.214 0c22.417 16 44.835 16 67.253 0"
          ></path>
        </svg>
      </h2>

      <ul id={sectionStyles.extracurricular_list}>
        <li className={sectionStyles.list_item}>
          <FBLA />
        </li>
        {/* <li className={sectionStyles.list_item}>
          <FBLA />
        </li> */}
      </ul>
    </section>
  );
};

export default ExtracurricularSection;
