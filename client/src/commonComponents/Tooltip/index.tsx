//react
import React from 'react';

//components
import RCTooltip from 'rc-tooltip';

//models
import { ITooltip } from './models';

export const Tooltip = (props: ITooltip) => {
  const { placement = 'top', overlay, children, isVisible } = props;

  if (!isVisible) return <>{children}</>;

  return (
    <RCTooltip placement={placement} overlay={<span>{overlay}</span>}>
      {children}
    </RCTooltip>
  );
};
