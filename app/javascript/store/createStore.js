import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import greetingReducer from './greetings';

const store = configureStore({
  reducer: greetingReducer,
  middleware: [thunk],
});

export default store;
