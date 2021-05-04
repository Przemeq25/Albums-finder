import { fireEvent, render } from '@testing-library/react';
import Popup from './Popup';

describe('Popup', () => {
  console.error = jest.fn();
  it('should set overflow hidden on the body element', () => {
    const body = document.querySelector('body');
    expect(body.style.overflow).toBeFalsy();

    render(<Popup isPopupOpen />);
    expect(body.style.overflow).toEqual('hidden');
  });

  it('should set overflow unset and unmount', () => {
    const handleClose = jest.fn();
    const body = document.querySelector('body');

    const { getByTestId, unmount } = render(
      <Popup isPopupOpen handleClose={handleClose}>
        <div>Song</div>
      </Popup>
    );

    const popup = getByTestId('popup');
    unmount();
    expect(body.style.overflow).toEqual('unset');
    expect(popup).not.toBeInTheDocument();
  });

  it('should close on clickAway or click ESC', () => {
    const handleClose = jest.fn();
    const modalRoot = document.createElement('div');

    render(<Popup isPopupOpen handleClose={handleClose} />, modalRoot);

    fireEvent.keyDown(document, { key: 'Escape', code: 27 });
    expect(handleClose).toHaveBeenCalledTimes(1);

    fireEvent.click(document.body);
    expect(handleClose).toHaveBeenCalled();
  });
});
