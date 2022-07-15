import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.sass";
import { useMediaQuery } from "react-responsive";

const cx = classNames.bind(styles);

const DefaultLayout = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 739px)` });
  return (
    <div className={cx("wrapper")}>
      <span className={cx("bg-attachment")}>
        <h1>{isMobile ? "GAVIN" : <marquee>GAVIN</marquee>}</h1>
      </span>
    </div>
  );
};
export default DefaultLayout;
