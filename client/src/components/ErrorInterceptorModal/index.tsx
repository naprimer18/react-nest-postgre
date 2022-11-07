import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { dispatch, RootState } from "../../store";
import { removeModal } from "../../store/ErrorInterceptorModal/actions";
import { ModalWindow } from "../../commonComponents/ModalWindowController/ModalWindow";
import { ErrorHeaderContent } from "../../commonComponents/ModalWindowController/ModalWindow/ModalWindowHeader/ErrorHeaderContent";

//styles
import styles from "./styles/index.module.scss";

export const ErrorInterceptorModal = () => {
  const { t } = useTranslation();
  const ErrorInterceptorModal = useSelector(
    (state: RootState) => state.ErrorInterceptorModal
  );

  const { modalContent } = ErrorInterceptorModal;
  const onClickButton = () => dispatch(removeModal());

  return (
    <>
      {!!modalContent && (
        <ModalWindow active={!!modalContent.length} deactivate={onClickButton}>
          <ModalWindow.Header onClickButton={onClickButton}>
            <ErrorHeaderContent />
          </ModalWindow.Header>
          <ModalWindow.Body>
            <h3 className={styles.description}>
              {t("errors.responseError.description")}
              <br />
              {t("errors.solvingStepsMessage")}
              <br />
            </h3>
            <ul className={styles.steps}>
              <li>{t("errors.responseError.steps.one")}</li>
              <li>{t("errors.responseError.steps.two")}</li>
              <li>{t("errors.responseError.steps.three")}</li>
            </ul>
          </ModalWindow.Body>
        </ModalWindow>
      )}
    </>
  );
};
