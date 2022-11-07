import React, { ReactElement } from "react";

export interface IButtonProps {
  title?: string;
  type?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onKeyDown?: () => void;
  icon?: ReactElement;
  path?: string;
  className?: string;
  tabIndex?: number;
  autoFocus?: boolean;
  active?: boolean;
}
