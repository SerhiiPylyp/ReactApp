import { createContext } from 'react';
import { initialState } from './initialeState';

export const ToDoContext = createContext(initialState);
export const { Provider } = ToDoContext;
