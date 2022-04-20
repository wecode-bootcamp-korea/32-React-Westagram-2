import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import './pages/LeeJiSoo/Main/mixin.scss';
import './pages/LeeJiSoo/Main/variable.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
