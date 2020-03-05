import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { SyncOutlined } from '@ant-design/icons';


import './style.css'
import PartRevolution from '../../components/PartRevolution';
import BlogCardModule from '../../components/PartPublication/BlogCardModule';

const cards = [
    { title:"Title of the blog or article will be here", subTitle:"Robert Wesker", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/robert.png'},
    { title:"Title of the blog or article will be here", subTitle:"Marta Łapacz", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/marta.png'},
    { title:"Title of the blog or article will be here", subTitle:"Tomasz Rozmus", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/tomas.png'},
    { title:"Title of the blog or article will be here", subTitle:"Nombeko Mabandla", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/nombeker.png'},
    { title:"Title of the blog or article will be here", subTitle:"Marta Łapacz", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/marta.png'},
    { title:"Title of the blog or article will be here", subTitle:"Robert Wesker", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/robert.png'},
    { title:"Title of the blog or article will be here", subTitle:"Lirdi Cani", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/lirdi.png'},
    { title:"Title of the blog or article will be here", subTitle:"Tomasz Rozmus", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/tomas.png'},
    { title:"Title of the blog or article will be here", subTitle:"Lirdi Cani", date: '2020-2-22', text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus.", background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg', photo: '/assets/images/team-members/lirdi.png'},
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

    componentDidMount () {
        window.scrollTo(0, 0);
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
                            <img src={cards[0].photo} alt='cards' />
                        </div>
                        <div className='auth-title'>What is Blockchain Technology</div>
                        <div className='auth-col-set d-flex justify-content-center'>
                            <div className='auth-name'>Robert Wesker</div>
                            <div className='auth-date'>2-22-2020</div>
                        </div>
                        <div className='auth-article'>
                            The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?
                            <br />
                            <Link to='/blogpost' className='d-flex justify-content-end'>See More</Link>
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