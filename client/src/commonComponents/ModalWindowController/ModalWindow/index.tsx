//react
import React, { useEffect, useRef } from "react";

//components
import { ModalWindowHeader } from "./ModalWindowHeader";

//styles
import style from "./styles/index.module.scss";

//models
import { IModalWindowBody, IModalWindowProps } from "./models";

//tools
import { classes } from "../../../utils/classes";

const VALID_ELEMENTS =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex="1"]';

export const ModalWindow = (props: IModalWindowProps) => {
  const { active, deactivate, hide, hiddenModal, children } = props;
  const modalRef = useRef<any>(null);

  useEffect(() => {
    setFocus();
    document.addEventListener("keydown", keyListener);

    return () => {
      const activeBeforePopup = modalRef.current && document.activeElement;
      document.removeEventListener("keydown", keyListener);
      activeBeforePopup && activeBeforePopup.focus();
    };
  });

  const setFocus = () => {
    const focusableElements =
      modalRef.current && modalRef.current.querySelectorAll(VALID_ELEMENTS);
    focusableElements[0].focus();
  };

  const handleTabKey = (e: any) => {
    const focusableElements =
      modalRef.current && modalRef.current.querySelectorAll(VALID_ELEMENTS);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (!e.shiftKey && document.activeElement === lastElement && firstElement) {
      firstElement.focus();
      return e.preventDefault();
    }

    if (e.shiftKey && document.activeElement === firstElement && lastElement) {
      lastElement.focus();
      return e.preventDefault();
    }
  };

  const closePopup = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    deactivate();
  };

  const keyListenersMap = new Map([
    [27, closePopup],
    [9, handleTabKey],
  ]);

  const keyListener = (event: any) => {
    const listener = keyListenersMap.get(event.keyCode);
    return listener && listener(event);
  };

  return (
    <div
      className={classes(
        style.modalContainer,
        active && style.activeModal,
        hiddenModal && style.hiddenModal
      )}
      onClick={hide}
      role="dialog"
      aria-modal="true"
      ref={modalRef}
    >
      <div
        className={classes(style.modalContent, active && style.activeContent)}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const ModalWindowBody = (props: IModalWindowBody) => {
  const { children } = props;
  return <div className={style.modalDescription}>{children}</div>;
};

ModalWindow.Header = ModalWindowHeader;
ModalWindow.Body = ModalWindowBody;
