/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme', true);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    enabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [enabled]);

  return [enabled, setEnabled] as const;
};

export default useDarkMode;
