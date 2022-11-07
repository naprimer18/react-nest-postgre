// React
import React, { useState } from 'react';

// utils
import { classes } from '../../utils/classes';

// styles
import styles from './styles/index.module.scss';

// models
import { ITextareaProps } from './models';

export const Textarea = (props: ITextareaProps) => {
  const [errorContent, setErrorContent] = useState<string | null>('');

  const { label, validate, isRequired, ...otherProps } = props;

  const resetErrorContent = () => setErrorContent('');

  const validateTextarea = () => validate && setErrorContent(validate());

  return (
    <div className={styles.textareaContainer}>
      {label && (
        <div
          className={`${styles.textareaLabel} ${
            isRequired && styles.requiredField
          }`}
        >
          {label}
        </div>
      )}
      <textarea
        {...otherProps}
        className={classes(styles.textarea, errorContent && styles.error)}
        onBlur={validateTextarea}
        onFocus={resetErrorContent}
      />
      {errorContent && (
        <div className={classes(styles.error)}>{errorContent}</div>
      )}
    </div>
  );
};
