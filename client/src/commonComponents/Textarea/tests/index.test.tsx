import React from 'react';
import { shallow } from 'enzyme';
import { Textarea } from '..';
import { ITextareaProps } from '../models';
import styles from '../styles/index.module.scss';

const mockCallBack = jest.fn();

const setTextarea = (props: ITextareaProps) => {
  return shallow(<Textarea {...props} />);
};

describe('<Textarea />', () => {
  it('should contain label', () => {
    const component = setTextarea({ value: 'test', label: 'testtest' });
    const divWrapper = component.find(`.${styles.textareaLabel}`);
    expect(divWrapper.length).toBe(1);
  });

  it('should call onChange method', () => {
    const component = setTextarea({ value: 'test', onChange: mockCallBack });
    expect(mockCallBack.mock.calls.length).toBe(0);
    component.find('textarea').simulate('change');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should contain text what we entered', () => {
    const component = setTextarea({
      value: 'something',
    });
    expect(component.find('textarea').get(0).props.value).toEqual('something');
  });
});
