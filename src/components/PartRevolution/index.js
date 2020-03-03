import React from 'react';
import { Button } from 'reactstrap';

import './style.css';
import { Link } from 'react-router-dom';

const PartRevolution = () => {
    return (
        <div className='partRevolution d-flex justify-content-between flex-wrap align-items-center'>
            <div className='revolution-title'>
                <div className='title-1'>Join the revolution</div>
                <div className='title-2'>The future of loyalty systems just begun</div>
            </div>
            <Link to='/register'>
                <Button className='revolution-btn d-flex justify-content-between'>
                    <div>APPLY NOW</div>
                    <div><img src='/assets/images/arrow-right.svg' alt='arrow' /></div>
                </Button>
            </Link>
        </div>
    );
}

export default PartRevolution;