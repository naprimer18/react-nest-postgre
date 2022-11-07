//react
import { ReactNode } from 'react';

export interface IModalWindowProps {
  active: boolean;
  deactivate: () => void;
  hide?: () => void;
  hiddenModal?: boolean;
  children: ReactNode;
}

export interface IModalWindowBody {
  children: ReactNode;
}
