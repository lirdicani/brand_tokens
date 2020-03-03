import React from 'react';

import './style.css';
import PartHow from '../../components/PartHow';
import PartUsers from '../../components/PartUsers';
import PartPercent from '../../components/PartPercent';
import PartCurrency from '../../components/PartCurrency';
import PartSolution from '../../components/PartSolution';
import CompaniesGroup from '../../components/CompaniesGroup';
import PartRevolution from '../../components/PartRevolution';
import PartPublication from '../../components/PartPublication';

class Homepage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {

        };

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return(
            <div className="Homepage">
                <PartCurrency />
                <PartSolution />
                <PartUsers />
                <PartHow />
                <PartPercent />
                <PartPublication />
                <CompaniesGroup />
                <PartRevolution />
            </div>
        );
    }
}

export default Homepage;