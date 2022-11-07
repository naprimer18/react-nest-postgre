import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as ErrorIcon } from "../../images/errorIcon.svg";

import style from "./styles/index.module.scss";

export const ErrorHeaderContent = () => {
  const { t } = useTranslation();
  return (
    <div className={style.modalTitle}>
      <ErrorIcon className={style.modalErrorImage} />
      <h2>{t("errors.commonTitle")}</h2>
    </div>
  );
};
