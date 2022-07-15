import React from "react";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.sass";

const cx = classNames.bind(styles);

const DefaultLayout = () => {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("bg-attachment")}>
        <h1>GAVIN</h1>
      </span>
    </div>
  );
};
export default DefaultLayout;
