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

import './style.css';

class BlogCardModule extends React.Component {

    render() {
        return(
            <div className='blog-container'>
                    {
                        this.props.cards.map((data, i) =>(
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