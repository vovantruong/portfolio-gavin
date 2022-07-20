import React, { useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./MenuBar.module.sass";
import IcHomeDark from "../../assets/image/logo-home-dark.svg";
import IcHomeLight from "../../assets/image/logo-home-light.svg";
import IcPhoneDark from "../../assets/image/logo-phone-dark.svg";
import IcPhoneLight from "../../assets/image/logo-phone-light.svg";
import IcBarDark from "../../assets/image/logo-bar-dark.svg";
import IcBarLight from "../../assets/image/logo-bar-light.svg";
import IcBagDark from "../../assets/image/logo-bag-dark.svg";
import IcBaglight from "../../assets/image/logo-bag-light.svg";
import IcBookDark from "../../assets/image/logo-book-dark.svg";
import IcBookLight from "../../assets/image/logo-book-light.svg";
import useDarkMode from "../../theme/useDarkMode";
import { MediaQueryContext } from "../../Context/MediaQueryContext";

const cx = classNames.bind(styles);

const dataIcon = [
  {
    iconDark: IcBookDark,
    iconLight: IcBookLight,
    name: "Project",
  },
  {
    iconDark: IcBagDark,
    iconLight: IcBaglight,
    name: "Skill",
  },
  {
    iconDark: IcHomeDark,
    iconLight: IcHomeLight,
    name: "Home",
  },
  {
    iconDark: IcBarDark,
    iconLight: IcBarLight,
    name: "About me",
  },
  {
    iconDark: IcPhoneDark,
    iconLight: IcPhoneLight,
    name: "Contact",
  },
];

const MenuBar = () => {
  const [active, setActive] = useState(2);
  const [darkmode, setDarkMode] = useDarkMode();

  const isMobile = useContext(MediaQueryContext);

  console.log(isMobile);
  return (
    <div className={cx("side-bar")}>
      <div className={cx("wrapper")}>
        <ul>
          {dataIcon.map((logo, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={cx({ ["active"]: active === index })}
            >
              <div className={cx("logo-img")}>
                <img
                  src={darkmode ? logo.iconDark : logo.iconLight}
                  alt="..."
                />
              </div>
              <div className={cx("name")}>
                <span>{logo.name}</span>
              </div>
            </li>
          ))}
          <div className={cx("wrap-cricle")}>
            <div className={cx("wrap-cricle__wrap-dot")}>
              <span className={cx("wrap-cricle__dot-1")}></span>
              <span className={cx("wrap-cricle__dot-2")}></span>
              <span className={cx("wrap-cricle__dot-3")}></span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default MenuBar;
