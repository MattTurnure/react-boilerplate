require('./main.scss');

console.info('NODE ENVIRONMENT', process.env.NODE_ENV);

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main';

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);