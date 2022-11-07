import { ReactNode } from 'react';

export interface ICheckbox {
  type?: 'secondary' | 'primary';
  label?: ReactNode;
  checked: boolean;
  onChange: () => void;
  tabIndex?: number;
  hasError?: boolean;
}
