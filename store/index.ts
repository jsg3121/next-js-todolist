import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  TypedUseSelectorHook,
  useDispatch as useReduxDispatch,
  useSelector as useReactSelector,
} from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import rootAction from './src/actions';
import rootEpic from './src/epics';
import rootReducer from './src/reducer';

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),

  devTools: process.env.NODE_ENV !== 'production',
});

epicMiddleware.run(rootEpic);

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
