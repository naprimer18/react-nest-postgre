// React
import React from "react";
import { useHistory } from "react-router-dom";
// utils
import { classes } from "../../utils/classes";
import { buttonTypes } from "./constants";
import { handleEnterDown } from "../../utils/keyDownHandler";
// styles
import styles from "./styles/index.module.scss";
// models
import { IButtonProps } from "./models";

export const Button = (props: IButtonProps) => {
  const {
    title,
    type = "primary",
    icon,
    path = "",
    className,
    onKeyDown,
    onClick,
    active,
    ...otherProps
  } = props;

  const history = useHistory();

  const isActive = (path && history.location.pathname.includes(path)) || active;

  const enterInterception = (e: React.KeyboardEvent<HTMLElement>) => {
    onKeyDown && handleEnterDown(e, onKeyDown);
  };

  const clickInterception = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick && onClick(e);

    if (type === buttonTypes.link && path) history.push(path);
  };

  return (
    <button
      {...otherProps}
      onClick={clickInterception}
      onKeyDown={enterInterception}
      className={classes(className, styles[type], isActive && styles.active)}
    >
      {icon} {title}
    </button>
  );
};
