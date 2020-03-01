import React from 'react';

import { Button } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import './style.css'
import BlogCardModule from '../../components/PartPublication/BlogCardModule';
import PartRevolution from '../../components/PartRevolution';

const cards = [
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
    { title:"Title of the blog or article will be here", subTitle:"Auther name", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTl_aAcpKehSCWk6WnsZgRmWLBj0w5i43GFyRnXooMI-xzPQaTq'},
];

class BlogPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            loading: false,
            iconLoading: false,
        }

        this.props.changeSpecialClass('blog');
    }

    enterLoading = () => {
        this.setState({ loading: true });
    };

    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    };

    render () {
        return (
            <div className='blog'>
                <div className='blog-clip-effect'></div>
                <div className='top-title'>Our Blog</div>
                <div className='contents'>
                    <div className='auth'>
                        <div className='auth-character'>
                            <img src={cards[0].photo} />
                        </div>
                        <div className='auth-title'>What is Blockchain Technology</div>
                        <div className='auth-col-set d-flex justify-content-center'>
                            <div className='auth-name'>Auther name</div>
                            <div className='auth-date'>2-22-2020</div>
                        </div>
                        <div className='auth-article'>
                            The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?
                        </div>
                    </div>
                    <BlogCardModule cards={cards} />
                    <div className='loading-more-articles'>
                        <Button
                            icon={<SyncOutlined />}
                            loading={this.state.iconLoading}
                            onClick={this.enterIconLoading}
                        >
                            LOAD MORE ARTICLES                    
                        </Button>
                    </div>
                </div>                
                <PartRevolution />
            </div>
        );
    }
}

export default BlogPage;