// React
import React from 'react';

//utils
import { classes } from '../../utils/classes';

// styles
import styles from './styles/index.module.scss';

// models
import { ICheckbox } from './models';
import { DEFAULT_TAB_INDEX } from '../../constants';

export const Checkbox = (props: ICheckbox) => {
  const {
    type = 'primary',
    label,
    checked,
    onChange,
    tabIndex = DEFAULT_TAB_INDEX,
    hasError,
  } = props;

  return (
    <div
      className={classes(styles.checkboxContainer, hasError && styles.error)}
      tabIndex={tabIndex}
      onKeyDown={onChange}
    >
      <div
        className={classes(styles[type], checked && styles.checked)}
        onClick={onChange}
      />
      {label && (
        <span className={styles.checkboxLabel} onClick={onChange}>
          {label}
        </span>
      )}
    </div>
  );
};
