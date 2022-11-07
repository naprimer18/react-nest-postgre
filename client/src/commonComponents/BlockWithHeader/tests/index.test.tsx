import React from 'react';
import { shallow } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { map } from 'lodash';
import configureStore from 'redux-mock-store';

import styles from '../styles/index.module.scss';
import i18n from '../../../localization/i18n';
import BlockWithHeader from '..';

const mockStore = configureStore();

const store = mockStore({
  permissions: {
    sharedUsers: [
      {
        user: {
          id: '95e535d9-c218-4e12-bb3',
          username: 'frontuser',
          firstName: null,
          lastName: null,
          email: null,
        },
        role: {
          id: 'a477a64a-6566-6601',
          createdAt: '2022-02-17T09:08:25.509463',
          createdBy: '405b9a61-967f-41c3-9b3f-6b1127dfe6fa',
          updatedAt: '2022-02-17T09:08:25.509463',
          updatedBy: '405b9a61-967f-41c3-9b3f-6b1127dfe6fa',
          name: 'WORKSPACE_OWNER',
          description: 'Owner of the workspace',
        },
      },
    ],
  },
});

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => jest.fn(),
  useSelector: () => jest.fn(fn => fn()),
}));

const mockProps = {
  title: 'test',
};

describe('Set up invite user block: ', () => {
  beforeEach(() => {
    shallow(
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BlockWithHeader {...mockProps}>
            <div>Test</div>
          </BlockWithHeader>
        </Provider>
      </I18nextProvider>
    );
  });

  it('1. There is same count of users card as mock data count: ', () => {
    const mockArray = new Array(3);
    const component = shallow(
      <BlockWithHeader {...mockProps}>
        {map(mockArray, () => (
          <div key={mockArray.length} className={styles.invitedUserCard}>
            Test
          </div>
        ))}
      </BlockWithHeader>
    );
    const card = component.find(`.${styles.invitedUserCard}`);
    expect(card.length).toBe(3);
  });

  it('2. Block has title: ', () => {
    const component = shallow(
      <BlockWithHeader {...mockProps}>
        <div className={styles.invitedUserCard}>Test</div>
      </BlockWithHeader>
    );
    const title = component.find('h1');

    expect(title.at(0).text()).toBe(mockProps.title);
  });
});
