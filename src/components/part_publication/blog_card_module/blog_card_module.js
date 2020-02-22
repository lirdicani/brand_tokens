import React from 'react';

import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
}
from 'reactstrap';

import './blog_card_module.css';

const cards = [
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus." },
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-23', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus." },
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-25', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus." },
];

class BlogCardModule extends React.Component {
    render() {
        return(
            <div className='blog-container d-flex justify-content-between'>
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
        <CardImg top width="100%" src='https://images-na.ssl-images-amazon.com/images/G/01/img18/home/BestHome/LandingPages/03_Q1_LandingPages_SmallSpace_Desktop.jpg' alt="Card image cap" />
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