import React from 'react';

import { Button } from 'reactstrap';

import './part_publication.css';
// import BlogCardModule from './blog_card_module/blog_card_module';

const PartPublication = () => {
    return (
        <div className='partPublication'>
            <div className='part-publication-title'>PUBLICATIONS</div>
            <div className='part-publication-blog-title d-flex justify-content-between align-items-end'>
                <div className='part-publication-blog-title-intro'>From our blog</div>
                <Button className='more-blog' >SEE MORE FROM OUR BLOG</Button>
            </div>
            {/* <BlogCardModule /> */}
        </div>
    )
}

export default PartPublication;