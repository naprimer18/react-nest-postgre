import { ReactNode } from 'react';

interface IContent {
  tab: {
    element: ReactNode,
    tooltip: string,
  };
  body: ReactNode;
}

export interface ITabsProps {
  content: IContent[];
}
