import React from 'react';

import './App.css';
import PartHow from './components/part_how/part_how';
import PartUsers from './components/part_users/partUsers';
import PartPercent from './components/part_percent/part_percent';
import PartCurrency from './components/part_currency/part_currency';
import PartMainTitle from './components/part_mainTitle/part_mainTitle';
import PartPublication from './components/part_publication/part_publication';
import CompaniesGroup from './components/part_companies_group/part_companies_group';
import PartRevolution from './components/part_revolution/part_revolution';
import Footer from './components/footer/footer';

const App = () => {
    return(
        <div className="App">
            <div className="content">
                <PartCurrency />
                <PartMainTitle />
                <PartUsers />
                <PartHow />
                <PartPercent />
                <PartPublication />
                <CompaniesGroup />
                <PartRevolution />
                <Footer />
            </div>
        </div>
    );
}

export default App;
