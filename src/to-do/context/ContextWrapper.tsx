import { Provider } from './index';
import React, { useEffect, useState, FC } from 'react';
import { Lists } from './types';

export const ContextWrapper: FC<{ children: JSX.Element }> = ({ children }) => {
  const [lists, setLists] = useState<Lists>(JSON.parse(localStorage.getItem('lists') || '{}'));
  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(lists));
  }, [lists]);
  return <Provider value={{ lists, setLists }}>{children}</Provider>;
};
