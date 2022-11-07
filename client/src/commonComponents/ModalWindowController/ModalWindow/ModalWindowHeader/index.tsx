import React from "react";

import { Button } from "../../../Button";
import { ReactComponent as CloseIcon } from "../images/closeIcon.svg";

import style from "./styles/index.module.scss";

import { link, MODAL_TAB_INDEX } from "../../../../constants";
import { IModalWindowHeader } from "./models";

export const ModalWindowHeader = (props: IModalWindowHeader) => {
  const { onClickButton, children } = props;

  return (
    <div className={style.modalHeader}>
      {children}
      <Button
        tabIndex={MODAL_TAB_INDEX}
        className={style.closeModalButton}
        type={link}
        icon={<CloseIcon />}
        onClick={onClickButton}
        onKeyDown={onClickButton}
      />
    </div>
  );
};
