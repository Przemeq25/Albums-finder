import { render, fireEvent, screen } from '@testing-library/react';
import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('should change value', () => {
    const searchFunc = jest.fn();

    const { rerender, getByPlaceholderText } = render(
      <SearchInput
        placeholder="Search"
        handleInputChange={searchFunc}
        phrase=""
      />
    );
    const searchBox = getByPlaceholderText('Search');
    expect(searchBox.value).toBe('');

    fireEvent.change(searchBox, { target: { value: 'ac/dc' } });
    expect(searchFunc).toHaveBeenCalled();

    rerender(
      <SearchInput
        placeholder="Search"
        handleInputChange={searchFunc}
        phrase="ac/dc"
      />
    );
    expect(searchBox.value).toBe('ac/dc');
  });
});
