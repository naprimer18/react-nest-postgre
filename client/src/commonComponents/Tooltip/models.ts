import React from 'react';

export interface ITooltip {
  placement?: string;
  overlay: string | undefined;
  children: React.ReactElement;
  isVisible?: boolean;
}
