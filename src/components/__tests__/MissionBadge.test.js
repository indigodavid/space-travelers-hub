import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionBadge from '../MissionBadge';

const renderMissionBadgeComponent = (reserved) => {
  const { container } = render(
    <Provider store={store}>
      <MissionBadge reserved={reserved} />
    </Provider>,
  );
  return container;
};

describe('Test Missions component', () => {
  test('Match Snapshot', () => {
    expect(renderMissionBadgeComponent(true).firstChild).toMatchSnapshot();
  });

  test('Check status when reserved is true', () => {
    expect(renderMissionBadgeComponent(true).querySelector('.active')).toBeInTheDocument();
  });

  test('Check status when reserved is true', () => {
    renderMissionBadgeComponent(false);
    expect(screen.getByText(/Not a Member/i)).toBeInTheDocument();
  });
});
