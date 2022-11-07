import { FormEvent, ReactNode } from 'react';

export type ITextareaProps = {
  value: string,
  placeholder?: string,
  label?: string | ReactNode,
  name?: string,
  disabled?: boolean,
  onChange?: (e: FormEvent<HTMLTextAreaElement>) => void,
  validate?: (value?: string) => string | null,
  isRequired?: boolean,
};
