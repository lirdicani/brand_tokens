import React from 'react';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
}
from 'reactstrap';

import './blog_card_module.css';

const cards = [
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    // { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
];

class BlogCardModule extends React.Component {
    render() {
        return(
            <div className='blog-container'>
                    {
                        cards.map((data, i) =>(
                            <div key={i} className="spacing">
                                <CardHostComponent {...data}/>
                            </div>
                        ))
                    }
            </div>
        );
    }
}

const CardHostComponent = (props) => (
    <Card>
        <CardImg top width="100%" className='background-image' src={props.background_image} alt="Card image cap" />
        <div className='person-image'><CardImg src={props.photo} alt='person-image' /></div>
        <CardBody>
            <CardTitle>{props.title}</CardTitle>
            <div className='subtitle-group d-flex justify-content-start'>
                <CardSubtitle>{props.subTitle}</CardSubtitle>
                <CardSubtitle>{props.date}</CardSubtitle>
            </div>
            <CardText>{props.text}</CardText>
        </CardBody>
    </Card>
);

export default BlogCardModule;