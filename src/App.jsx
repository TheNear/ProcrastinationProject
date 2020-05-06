import React, { Fragment } from 'react';
import './App.scss'
import {
  BrowserRouter as Router,
} from "react-router-dom";

import MainPage from './pages/MainPage';

export default function App() {
  return (
    <Router>
      <MainPage />
    </Router>
  )
};