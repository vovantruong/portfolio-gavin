import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.sass";
import { useMediaQuery } from "react-responsive";
import MenuBar from "./MenuBar/MenuBar";

const cx = classNames.bind(styles);

const DefaultLayout = ({children}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 739px)` });
  return (
    <div className={cx("default-layout")}>
      <MenuBar />
      <span className={cx("bg-attachment", 'container-fluid')}>
        <h1>GAVIN</h1>
      </span>
      <div className={cx('wrapper')}>
        {children}
      </div>
    </div>
  );
};
export default DefaultLayout;
