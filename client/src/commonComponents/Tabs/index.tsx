import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classes } from '../../utils/classes';
import { Tooltip } from '../Tooltip';
import { ITabsProps } from './models';

import styles from './styles/index.module.scss';

export const Tabs = ({ content }: ITabsProps) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const selectTab = (id: number) => () => setActiveTab(id);

  useEffect(() => {
    content.length && setActiveTab(0);
  }, []);

  if (!content.length)
    return <div className={styles.empty}>{t('default.noData')}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {content.map((c: any, index: number) => {
          const {
            tab: { element, tooltip },
          } = c;
          const classCollection = [styles.tab];
          if (activeTab === index) classCollection.push(styles.active);

          return (
            <Tooltip overlay={tooltip} key={index} isVisible={!!tooltip}>
              <div
                className={classes(...classCollection)}
                onClick={selectTab(index)}
              >
                {element}
              </div>
            </Tooltip>
          );
        })}
      </div>
      {activeTab !== null && (
        <div className={styles.body}>{content[activeTab].body}</div>
      )}
    </div>
  );
};
