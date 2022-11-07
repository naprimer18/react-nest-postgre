import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '..';
import { ReactComponent as LogOutIcon } from '../../../components/MainSpace/LeftMenu/images/help.svg';
import { IButtonProps } from '../models';

interface ISetButton {
  onClick?: IButtonProps['onClick'];
  disabled?: IButtonProps['disabled'];
  title?: IButtonProps['title'];
  icon?: IButtonProps['icon'];
  wide?: IButtonProps['wide'];
}

const setButton = (props: ISetButton) => shallow(<Button {...props} />);

describe('<Button />', () => {
  const mockCallBack = jest.fn();
  const component = setButton({ onClick: mockCallBack });
  const button = component.find('button');
  const event = Object.assign(jest.fn(), {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  });
  it('should contain button', () => {
    expect(button.length).toBe(1);
  });

  it('should call onClick method', () => {
    expect(mockCallBack.mock.calls.length).toBe(0);
    button.simulate('click', event);
    expect(mockCallBack.mock.calls.length).toBe(1);
  });

  it('should be disabled', () => {
    const component = setButton({ disabled: true, onClick: mockCallBack });
    const button = component.find('button');
    button.simulate('click', event);
    expect(button.prop('disabled')).toBe(true);
    expect(component.props().disabled).toBe(true);
  });

  it('should contain title if its passed', () => {
    const test = 'test';
    const component = setButton({ title: test });
    const button = component.find('button');
    expect(button.text().includes(test)).toEqual(true);
  });

  it('should contain icon if its passed', () => {
    const component = setButton({
      icon: <LogOutIcon />,
    });
    const button = component.find('button');
    expect(button.contains(<LogOutIcon />)).toBeTruthy();
    expect(button.find('svg')).toBeDefined();
  });

  it('should contain wide', () => {
    const component = setButton({
      wide: true,
    });
    const buttonWithWide = component.find('.wide');
    expect(buttonWithWide.length).toBe(1);
  });
});
