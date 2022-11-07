// React
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ISpinner } from './models';

//styles
import styles from './styles/index.module.scss';

export const Spinner = ({ disableText }: ISpinner) => {
  const { t } = useTranslation();

  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinnerElement} />
        <div className={styles.spinnerElement} />
        <div className={styles.spinnerElement} />
      </div>
      {!disableText && <span>{t('loading')}</span>}
    </div>
  );
};
