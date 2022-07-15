import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ToggleThemes.module.sass";
import useDarkMode from "../../theme/useDarkMode";
import IcLight from "../../assets/image/ic-sun.svg";
import IcDark from "../../assets/image/ic-moon.svg";

const cx = classNames.bind(styles);

const ToggleThemes = ({ className }) => {
  const [darkMode, setDarkMode] = useDarkMode();
 
  return (
    <div className={cx("toggle-theme", className)}>
      <button onClick={() => setDarkMode(!darkMode)}>
        <img src={!darkMode ? IcLight : IcDark} />
      </button>
    </div>
  );
};
export default ToggleThemes;
