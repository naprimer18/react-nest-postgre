import React from 'react';
import { shallow } from 'enzyme';
import { ModalWindow } from '..';
import { IModalWindowProps } from '../models';
import styles from '../styles/index.module.scss';

const mockCallBack = jest.fn();

const setModalWindow = (props: IModalWindowProps) => {
  return shallow(<ModalWindow {...props} />);
};

describe('<ModalWindow />', () => {
  it('should be hidden where is no active', () => {
    const component = setModalWindow({
      active: false,
      deactivate: mockCallBack,
      children: <></>,
    });
    const modal = component.find(`.${styles.activeModal}`);
    expect(modal.length).toBe(0);
  });
  it('should be have children element that we send via props', () => {
    const component = setModalWindow({
      active: false,
      deactivate: mockCallBack,
      children: <div className="test" />,
    });
    const child = component.find('.test');
    expect(child.length).toBe(1);
  });
});
