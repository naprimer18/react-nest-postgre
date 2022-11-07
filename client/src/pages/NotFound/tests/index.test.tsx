import React from 'react';
import { shallow } from 'enzyme';
import { t } from 'i18next';
import { NotFound } from '..';
import i18n from '../../../localization/i18n';
import { I18nextProvider } from 'react-i18next';

import styles from '../styles/index.module.scss';

describe('<NotFound /> ', () => {
  const component = shallow(<NotFound />);

  beforeEach(() => {
    shallow(
      <I18nextProvider i18n={i18n}>
        <NotFound />
      </I18nextProvider>
    );
  });

  it('1. Localization existed: ', () => {
    const filter = component.find(`.${styles.containerBody}`);
    const localization = [t('notFound.descriptions.body')];
    expect(localization).toContain(filter.text());
  });
});
