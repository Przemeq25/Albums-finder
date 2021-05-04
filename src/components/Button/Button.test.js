import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should renders correctly with all props', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button handleClick={handleClick}>See more</Button>
    );
    const btn = getByTestId('seemore-button');

    expect(btn).toBeTruthy();
    expect(btn).toHaveTextContent('See more');
    expect(handleClick).not.toHaveBeenCalled();

    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});
