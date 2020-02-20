import React from 'react';

import './App.css';
// import Menu from './components/menu/menu';
import PartCurrency from './components/part_currency/part_currency';
import PartMainTitle from './components/part_mainTitle/part_mainTitle';
import PartUsers from './components/part_users/partUsers';
// import Footer from './components/footer/footer';

function App() {
    return (
        <div className="App">
            {/* <Menu /> */}
            <div className="content">
                <PartCurrency />
                <PartMainTitle />
                <PartUsers />
            </div>
        </div>
    );
}

export default App;
