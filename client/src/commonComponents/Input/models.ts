import { FormEvent, ReactNode } from 'react';

export type IInputProps = {
  type: 'text' | 'password' | 'reset' | 'submit' | 'email',
  value: string,
  placeholder?: string,
  label?: string | ReactNode,
  name?: string,
  disabled?: boolean,
  onChange?: (e: FormEvent<HTMLInputElement>) => void,
  onEnterPress?: () => void,
  validate?: (value?: string) => string | null,
  isRequired?: boolean,
  className?: string,
  classNameInput?: string,
  autofocus?: boolean,
};
