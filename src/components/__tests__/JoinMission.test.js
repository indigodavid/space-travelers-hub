import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore'
import JoinMission from '../JoinMission';


const renderJoinMission = () => {
  const { container } = render(
    <Provider store={store}>
      <JoinMission reserved={true} id="9D1B7E0" />
    </Provider>
  );
  return container;
}

describe('Test JoinMission component', () => {
  test('Match Snapshot', () => {
    expect(renderJoinMission().firstChild).toMatchSnapshot();
  })

  test('Test button con click', () => {
    const element = renderJoinMission()
    expect(element.querySelector('.leave')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Leave Mission/i));
    setTimeout(() => {
      expect(element.querySelector('.join')).toBeInTheDocument();
    }, 500);
  })
})

