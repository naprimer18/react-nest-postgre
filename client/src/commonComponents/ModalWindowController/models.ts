import { ReactElement, ReactNode } from 'react';
export interface IModalWindowControllerProps {
  trigger: ReactElement;
  headerContent?: ReactNode;
  bodyContent: ReactNode;
}
