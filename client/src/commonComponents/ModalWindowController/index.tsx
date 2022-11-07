import React, { useState } from 'react';
import { ModalWindow } from './ModalWindow';
import { IModalWindowControllerProps } from './models';

const ModalWindowController = ({
  trigger,
  headerContent,
  bodyContent,
}: IModalWindowControllerProps) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const activePopup = (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => {
    e && e.stopPropagation();
    setActiveModal(true);
  };

  const deactivatePopup = () => {
    setActiveModal(false);
  };

  return (
    <>
      {React.cloneElement(trigger, {
        onClick: activePopup,
        onKeyDown: activePopup,
      })}
      {activeModal && (
        <ModalWindow active={activeModal} deactivate={deactivatePopup}>
          <ModalWindow.Header onClickButton={deactivatePopup}>
            {headerContent}
          </ModalWindow.Header>
          <ModalWindow.Body>{bodyContent}</ModalWindow.Body>
        </ModalWindow>
      )}
    </>
  );
};

export default ModalWindowController;
