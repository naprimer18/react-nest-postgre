// React
import React, { useState } from 'react';

// utils
import { classes } from '../../utils/classes';

// styles
import styles from './styles/index.module.scss';

// models
import { IInputProps } from './models';
import { handleEnterDown } from '../../utils/keyDownHandler';

export const Input = (props: IInputProps) => {
  const [errorContent, setErrorContent] = useState<string | null>('');

  const {
    label,
    validate,
    isRequired,
    className,
    classNameInput,
    autofocus,
    onEnterPress,
    ...otherProps
  } = props;

  const resetErrorContent = () => setErrorContent('');

  const validateInput = () => validate && setErrorContent(validate());

  const enterInterception = (e: React.KeyboardEvent<HTMLElement>) => {
    onEnterPress && handleEnterDown(e, [onEnterPress, validateInput]);
  };

  return (
    <div className={classes(styles.inputContainer, className)}>
      {label && (
        <div
          className={`${styles.inputLabel} ${
            isRequired && styles.requiredField
          }`}
        >
          {label}
        </div>
      )}
      <input
        {...otherProps}
        className={classes(
          styles.input,
          errorContent && styles.error,
          classNameInput
        )}
        onBlur={validateInput}
        onFocus={resetErrorContent}
        autoFocus={autofocus}
        onKeyDown={enterInterception}
      />
      {errorContent && (
        <div className={classes(styles.error)}>{errorContent}</div>
      )}
    </div>
  );
};
