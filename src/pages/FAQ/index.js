import React from 'react';

import './style.css';

class FAQ extends React.Component {

    constructor (props) {
        super(props);
        this.state = {

        }

        this.props.changeSpecialClass('');
    }

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className='faq-page'>
                <div className='faq-clip-effect-page'></div>
                <div className='faq-body'>
                    <div className='faq-page-title1'>FAQ</div>
                    <div className='faq-page-title2'>Last updated: January 10, 2020</div>
                    <div className='faq-contents'>
                        The FAQ will be available soon.
                    </div>
                </div>
            </div>
        );
    }
}

export default FAQ;