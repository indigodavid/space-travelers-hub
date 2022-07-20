import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'
import Missions from '../Missions';


const renderMissionsComponent = () => {
  const { container } = render(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  return container;
}

describe('Test Missions component', () => {
  test('Match Snapshot', () => {
    expect(renderMissionsComponent().firstChild).toMatchSnapshot();
  })

  test('Find Elements ny text', () => {
    expect(renderMissionsComponent().querySelector('.missionsData')).toBeInTheDocument();
  })
})

