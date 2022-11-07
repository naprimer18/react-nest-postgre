import React from 'react';

import { Button } from '../../../../Button';
import { ReactComponent as HideIcon } from '../../images/hideIcon.svg';
import { ReactComponent as ShowIcon } from '../../images/showIcon.svg';
import { link, MODAL_TAB_INDEX } from '../../../../../constants';

import style from './styles/index.module.scss';

export const UploadHeaderContent = (props: any) => {
  const { hiddenModal, onHideModal } = props;
  return (
    <>
      {!hiddenModal && (
        <Button
          tabIndex={MODAL_TAB_INDEX}
          className={style.showHideButtons}
          type={link}
          icon={<HideIcon />}
          onClick={onHideModal}
          onKeyDown={onHideModal}
        />
      )}
      {hiddenModal && (
        <>
          <p className={style.hiddenModalTitle}>Loading...</p>
          <Button
            tabIndex={MODAL_TAB_INDEX}
            className={style.showHideButtons}
            type={link}
            icon={<ShowIcon />}
            onClick={onHideModal}
            onKeyDown={onHideModal}
          />
        </>
      )}
    </>
  );
};
