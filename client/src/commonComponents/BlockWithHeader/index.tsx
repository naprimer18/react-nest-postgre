import React from 'react';

import { IProps } from './models';

import styles from './styles/index.module.scss';

const BlockWithHeader = ({ title, children, className }: IProps) => {
  return (
    <div className={styles.block}>
      <div className={styles.header}>
        <h1>{title}</h1>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};

export default BlockWithHeader;
