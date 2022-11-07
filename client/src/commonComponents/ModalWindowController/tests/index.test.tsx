import React from 'react';
import { shallow } from 'enzyme';
import ModalWindowController from '../';
import { IModalWindowControllerProps } from '../models';

const setModalController = (props: IModalWindowControllerProps) => {
  return shallow(<ModalWindowController {...props} />);
};

describe('<ModalController />', () => {
  it('should be have trigger element that we send', () => {
    const component = setModalController({
      trigger: <button className='testButton'></button>,
      bodyContent: <></>,
    });
    const trigger = component.find('.testButton');
    expect(trigger.length).toBe(1);
  });
});
