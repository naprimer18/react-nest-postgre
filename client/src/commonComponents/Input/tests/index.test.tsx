import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '..';
import { IInputProps } from '../models';

interface ISetInput {
  onChange?: IInputProps['onChange'];
  label?: IInputProps['label'];
  validate?: IInputProps['validate'];
}

const setInput = (props: ISetInput) =>
  shallow(<Input type={'text'} value={'test'} {...props} />);

describe('<Input />', () => {
  const mockCallBack = jest.fn();

  it('should call onChange method', () => {
    const component = setInput({ onChange: mockCallBack });
    expect(mockCallBack.mock.calls.length).toBe(0);
    component.find('input').simulate('change');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should contain label', () => {
    const component = setInput({ label: 'label' });
    const label = component.find('.inputLabel');
    expect(label.length).toBe(1);
  });

  it('should reset state after focus', () => {
    const component = setInput({ validate: () => 'test' });
    component.find('input').simulate('blur');
    expect(component.find('.error').length).toBe(2);
    component.find('input').simulate('focus');
    expect(component.find('.error').length).toBe(0);
  });
});
