//React
import React from 'react';

//jest enzyme
import { render } from 'enzyme';

//components
import { Spinner } from '..';

//models
import { ISpinner } from '../models';

//tools
import i18n from '../../../localization/i18n';
import { I18nextProvider } from 'react-i18next';
import { t } from 'i18next';

const setSpinner = (props: ISpinner) =>
  render(
    <I18nextProvider i18n={i18n}>
      <Spinner {...props} />
    </I18nextProvider>
  );

describe('<Spinner />', () => {
  it('should contain span if disableText = false ', () => {
    const component = setSpinner({ disableText: false });
    const span = component.find('span');
    expect(span.length).toBe(1);
    expect(span.text()).toEqual(t('loading'));
  });

  it('should not contain span if disableText = true', () => {
    const component = setSpinner({ disableText: true });
    const span = component.find('span');
    expect(span.length).toBe(0);
  });
});
