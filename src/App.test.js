import React from 'react';
import App from './App';
import { screen } from '@testing-library/react';
import { initialState, renderWrapper } from './utils/test-utils';

describe('App', () => {
  console.error = jest.fn();
  it('should render App with initialState', () => {
    const wrapper = renderWrapper(<App />, {
      initialState: initialState,
    });
    expect(wrapper).not.toBeNull();
  });

  it('should render App with empty data', () => {
    renderWrapper(<App />, {
      initialState: initialState,
    });
    expect(screen.getByText(/No data/)).toBeInTheDocument();
  });
});
