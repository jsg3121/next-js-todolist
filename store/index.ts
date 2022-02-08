import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './src/reducer';
import rootAction from './src/actions';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReactSelector,
} from 'react-redux';

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export const Actions = rootAction;
export const useDispatch = () => useReduxDispatch<Dispatch>();

export const useSelector: TypedUseSelectorHook<RootState> = useReactSelector;

const setupStore = (): EnhancedStore => {
  return store;
};

const makeStore = () => setupStore();

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
