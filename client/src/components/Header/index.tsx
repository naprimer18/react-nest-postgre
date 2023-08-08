// React
import React from "react";
import { useHistory } from "react-router-dom";

// components
import { Button } from "../../commonComponents/Button";

// tools
import urls from "../../routes/urls";
import { link, MODAL_TAB_INDEX } from "../../constants";

//styles
import style from "./styles/index.module.scss";

import { t } from "i18next";

export const Header = () => {
  const history = useHistory();

  const goToPage = (path: string) => history.push(path);

  return (
    <header className={style.header}>
      <div className={style.linkContainer}>
        <Button
          type={link}
          tabIndex={MODAL_TAB_INDEX}
          onClick={() => goToPage(urls.HEADER_ROUTES.BASE_APP_PAGE)}
          title={t("links.vlad")}
        />
        <Button
          type={link}
          tabIndex={MODAL_TAB_INDEX}
          onClick={() => goToPage(urls.HEADER_ROUTES.BASE_ABOUT_PAGE)}
          title={t("links.about")}
        />
      </div>
    </header>
  );
};
