import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button } from '../../commonComponents/Button';

import urls from '../../routes/urls';

import NotFoundImage from './images/404.png';

//styles
import style from './styles/index.module.scss';

export const NotFound = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const returnToMain = () => history.replace(urls.BASE_ROUTES.BASE_APP_PAGE);

  return (
    <div className={style.notFoundPageContainer}>
      <img
        className={style.notFoundPageImage}
        src={NotFoundImage}
        alt={t('notFound.descriptions.image')}
      />
      <span className={style.containerBody}>
        {t('notFound.descriptions.body')}
      </span>
      <Button title={t('notFound.return')} onClick={returnToMain} />
    </div>
  );
};
