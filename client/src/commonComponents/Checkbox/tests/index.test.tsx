import React from 'react';
import { shallow } from 'enzyme';
import { Checkbox } from '../index';
import { ICheckbox } from '../models';

interface ISetCheckbox {
  label?: ICheckbox['label'];
  hasError?: ICheckbox['hasError'];
}

const mockCallBack = jest.fn();

const setCheckbox = (props: ISetCheckbox) => {
  return shallow(
    <Checkbox checked={true} onChange={mockCallBack} {...props} />
  );
};

describe('<Checkbox />', () => {
  it('should contain label', () => {
    const component = setCheckbox({ label: 'label' });
    const label = component.find('span');
    expect(label.length).toBe(1);
  });

  it('should contain two divs', () => {
    const component = setCheckbox({ hasError: true });
    const divWrapper = component.find('div');
    expect(divWrapper.length).toBe(2);
  });

  it('should contain error', () => {
    const component = setCheckbox({ hasError: true });
    const div = component.find('.error');
    expect(div.length).toBe(1);
  });
});
