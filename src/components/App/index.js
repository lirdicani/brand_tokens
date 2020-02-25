import React from 'react';

import './style.css';
import Footer from '../Footer';
import PartHow from '../PartHow';
import PartUsers from '../PartUsers';
import PartPercent from '../PartPercent';
import PartCurrency from '../PartCurrency';
import PartSolution from '../PartSolution';
import PartRevolution from '../PartRevolution';
import PartPublication from '../PartPublication';
import CompaniesGroup from '../CompaniesGroup';

const App = () => {
    return(
        <div className="App">
            <div className="content">
                <PartCurrency />
                <PartSolution />
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
