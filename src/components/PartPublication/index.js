import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './style.css';
import BlogCardModule from './BlogCardModule';

const cards = [
    { title:"What is Blockchain Technology", subTitle:"Robert Wesker", date: '2020-2-22', text:"The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/robert.png'},
    { title:"What is Blockchain Technology", subTitle:"Marta Łapacz", date: '2020-2-22', text:"The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/marta.png'},
    { title:"What is Blockchain Technology", subTitle:"Lirdi Cani", date: '2020-2-22', text:"The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/lirdi.png'},
];

const PartPublication = () => {
    return (
        <div className='partPublication'>
            <div className='part-publication-title'>PUBLICATIONS</div>
            <div className='part-publication-blog-title d-flex justify-content-between align-items-end'>
                <div className='part-publication-blog-title-intro'>From our blog</div>
                <div className='d-flex justify-content-end'><Link to='/blog'><Button className='more-blog' >SEE MORE FROM OUR BLOG</Button></Link></div>
            </div>
            <BlogCardModule cards={cards} />
            <div className='partner-more-btn'><a href='/'>30 partners and more</a></div>
        </div>
    )
}

export default PartPublication;