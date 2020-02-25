import React from 'react';

import { Button } from 'reactstrap';

import './style.css';
import BlogCardModule from './BlogCardModule';

const PartPublication = () => {
    return (
        <div className='partPublication'>
            <div className='part-publication-title'>PUBLICATIONS</div>
            <div className='part-publication-blog-title d-flex justify-content-between align-items-end'>
                <div className='part-publication-blog-title-intro'>From our blog</div>
                <div className='d-flex justify-content-end'><Button className='more-blog' >SEE MORE FROM OUR BLOG</Button></div>
            </div>
            <BlogCardModule />
            <div className='partner-more-btn'><a href='/'>30 partners and more</a></div>
        </div>
    )
}

export default PartPublication;