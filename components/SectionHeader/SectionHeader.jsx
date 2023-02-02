import React from "react";
import style from "./sectionheader.module.css";

const SectionHeader = ({ title, text }) => {
  return (
    <div className={style.section_header}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default SectionHeader;
