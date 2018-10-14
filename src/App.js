import React from 'react';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-bootstrap';

import Routes from './Routes';

import Navigation from './components/header/Navigation';

const App = () => {
    return (
        <div>
            <Navigation />
            <Routes />
            <NotificationsSystem theme={theme}/>
        </div>
    )
};

export default App;