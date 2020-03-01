import React from 'react';

import './style.css';
import ContactInfoModule from '../ContactInfoModule';

class PersonCardModule extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render () {
        return (
            <div className='person-card d-flex justify-content-between'>
                <div className='person-card-character'>
                    <img src={this.props.person.photo} />
                </div>
                <div className='person-details'>
                    <div className='person-card-col-set'>
                        <div className='person-card-name'>{this.props.person.subTitle}</div>
                        <div className='person-card-date'>{this.props.person.date}</div>
                    </div>
                    <div className='person-article'>
                        {this.props.person.text}    
                    </div>
                    <div className='d-flex justify-content-start'><ContactInfoModule person_infor={this.props.person_infor} /></div>
                </div>
            </div>
        );
    }
}

export default PersonCardModule;