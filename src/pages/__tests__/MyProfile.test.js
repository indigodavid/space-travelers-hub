import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'
import MyProfile from '../MyProfile';

const renderMyProfilePage = () => {
  const { container } = render(
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
  return container;
}

describe('Test MissionsPage page', () => {
  test('Match Snapshot', () => {
    expect(renderMyProfilePage().firstChild).toMatchSnapshot();
  })

  test('Find Elements ny text', () => {
    renderMyProfilePage();
    expect(screen.getByText(/My Rockets/i)).toBeInTheDocument();
    expect(screen.getByText(/My Missions/i)).toBeInTheDocument();
  })
})

