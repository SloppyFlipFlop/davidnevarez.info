import React, { useContext } from "react";

// app context
// import { useContext } from "react";
import { AppContext } from "./../../../context/AppContext";

// components
import FadeInCard from "../../cards/FadeIn";

// styles
import formStyles from "./../../../styles/components/pages/home/ContactForm.module.scss";

const Desktop = () => {
  return <div>Desktop</div>;
};

const Mobile = () => {
  return (
    <form id={formStyles.form_container}>
      <h2 id={formStyles.form_title}>Contact</h2>

      <input type="text" />

      <input type="text" />
    </form>
  );
};

const ContactForm = () => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;
  return <FadeInCard>{isMobile ? <Mobile /> : <Desktop />}</FadeInCard>;
};

export default ContactForm;
