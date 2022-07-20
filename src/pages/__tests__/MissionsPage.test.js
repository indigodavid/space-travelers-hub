import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionsPage from '../MissionsPage';

const renderMissionsPage = () => {
  const { container } = render(
    <Provider store={store}>
      <MissionsPage />
    </Provider>,
  );
  return container;
};

describe('Test MissionsPage page', () => {
  test('Match Snapshot', () => {
    expect(renderMissionsPage().firstChild).toMatchSnapshot();
  });

  test('Test HTML elements', () => {
    expect(renderMissionsPage().querySelector('.missions')).toBeInTheDocument();
  });

  test('Find Elements ny text', () => {
    renderMissionsPage();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
    expect(screen.getByText(/Descriptions/i)).toBeInTheDocument();
  });

  test('Find buttons', () => {
    renderMissionsPage();
    // Wait for one second until data is retrieved from API
    setTimeout(() => {
      expect(screen.getByText(/Join Mission/i)).toBeInTheDocument();
    }, 1000);
  });
});
