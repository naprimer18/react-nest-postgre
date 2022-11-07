import React from 'react';
import { shallow } from 'enzyme';
import { ErrorHeaderContent } from '..';
import styles from '../styles/index.module.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../../../localization/i18n';

describe('<ModalWindow />', () => {
  const component = shallow(<ErrorHeaderContent />);

  beforeEach(() => {
    shallow(
      <I18nextProvider i18n={i18n}>
        <ErrorHeaderContent />
      </I18nextProvider>
    );
  });

  it('should be title div', () => {
    const modal = component.find(`.${styles.modalTitle}`);
    expect(modal.length).toBe(1);
  });
});
