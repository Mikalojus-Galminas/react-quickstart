import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './javascript/pages/HomePage';

const render = (Component): string => {
    ReactDOM.render(
        <Component />,
        document.getElementById('app'),
    );
};

document.addEventListener('DOMContentLoaded', () => {
    render(HomePage);
});

if (module.hot) {
    module.hot.accept();
}
