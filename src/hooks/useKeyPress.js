import { useEffect } from 'react';

export const useKeyPress = (key = 'Escape', callback) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleClick);
    };

    function handleClick(e) {
      if (e.key === key) {
        callback();
      }
    }
  });
};
