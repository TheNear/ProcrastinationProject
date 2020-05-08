import React from 'react';
import './App.scss'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './redux/store';


import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Router>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </Router>
  )
};