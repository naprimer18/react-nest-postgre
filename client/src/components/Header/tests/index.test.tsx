//React
import React from 'react';

//jest enzyme
import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

//components
import { Header } from '../index';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { I18nextProvider } from 'react-i18next';

//tools
import URLS from '../../../routes/urls';
import { t } from 'i18next';
import { createMemoryHistory } from 'history';
import i18n from '../../../localization/i18n';

describe('should render Header component', () => {
  const component = shallow(<Header />);
  const wrapper = component.find('Button');

  const history = createMemoryHistory();
  history.push('/');

  beforeEach(() => {
    render(
      <Router history={history}>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </Router>
    );
  });

  it('should contain Button', () => {
    expect(wrapper.length).toBe(2);
  });

  it('should contains correct passed path and title', () => {
    const headerLinkProp = [
      {
        title: t('links.marker'),
        location: URLS.HEADER_ROUTES.BASE_MARKER_PAGE,
      },
      { title: t('links.about'), location: URLS.HEADER_ROUTES.BASE_ABOUT_PAGE },
    ];

    wrapper.forEach((node, index) => {
      expect(node.prop('title')).toBe(headerLinkProp[index].title);
      expect(node.prop('type')).toBe('link');
    });
  });

  it('should call onClick on Marker button', () => {
    const markerButton = screen.getByText(`${t('links.marker')}`);
    expect(markerButton).toBeInTheDocument();
    userEvent.click(markerButton);
    expect(history.location.pathname).toBe(URLS.HEADER_ROUTES.BASE_MARKER_PAGE);
  });

  it('should call onClick on About button', () => {
    const aboutButton = screen.getByText(`${t('links.about')}`);
    expect(aboutButton).toBeInTheDocument();
    userEvent.click(aboutButton);
    expect(history.location.pathname).toBe(URLS.HEADER_ROUTES.BASE_ABOUT_PAGE);
  });
});
