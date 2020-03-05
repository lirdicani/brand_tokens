import React from 'react';
import { Input, Button } from 'reactstrap';
import { LikeOutlined } from '@ant-design/icons';

import './style.css';

let comments = [
    {name: 'Paromita Haque', photo: '/assets/images/team-members/member4.png', date: '2-22-2020', comment: 'Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.'},
    {name: 'Elsi Hansdottir', photo: '/assets/images/team-members/member3.png', date: '2-28-2019', comment: 'Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.'},
    {name: 'Gaspar Antunes', photo: '/assets/images/team-members/member1.png', date: '2-28-2019', comment: 'Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.'},
    {name: 'Mar Rueda', photo: '/assets/images/team-members/member2.png', date: '2-28-2019', comment: 'Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.'},
]

class CommentModule extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            auther:     this.props.commenter.auther,
            comment:    '',
            comments:   comments,
            photo:      this.props.commenter.photo,
        }
    }

    handleCommentChange = (e) => {
        const comment = e.target.value;

        this.setState({
            comment: comment
        });
    }

    addComment = (e) => {
        comments.push({
            comment:    this.state.comment,
            date:       '2-2-2020',
            name:       this.state.auther,
            photo:      this.state.photo,                        
        });

        this.setState({
            comment:    '',
            comments:   comments,
        });
    }

    render () {
        return(
            <div className='comment-container'>
                <div className='comment-module d-flex justify-content-between align-items-center'>
                    <div className='comment-card-character'>
                        <img src={this.props.commenter.photo} alt='person-image1' />
                    </div>
                    <div className='comment-details d-flex justify-content-between align-items-center'>
                        <div className='comment-card-col-set'><Input type='textarea' onChange={this.handleCommentChange} value={this.state.comment} placeholder='Write your comment…' /></div>
                        <Button className='comment-send-btn' onClick={this.addComment}><img src='/assets/images/send-comment.svg' alt='send-comment' /></Button>
                    </div>
                </div>
                <div className='comments-list'>
                    <div className='comments-header d-flex justify-content-between'>
                        <div>Comments</div>
                        <div>{this.state.comments.length} comments</div>
                    </div>
                    <div className='comments-contents'>
                        {
                            this.state.comments.map((data, i) => (
                                <div key={i} className='comments-item'>
                                    <div className='commenter d-flex justify-content-start'>
                                        <div className='photo'><img src={data.photo} alt='person-photo1' /></div>
                                        <div className='commenter-infor'>
                                            <div className='name'>{data.name}</div>
                                            <div className='date'>{data.date}</div>
                                        </div>
                                    </div>
                                    <div className='comment'>{data.comment}</div>
                                    <div className='comment-like d-flex justify-content-between'>
                                        <div className='favorite d-flex align-items-center'>
                                            <div className='favorite-icon'><LikeOutlined /> </div>
                                            <div className='favorite-numbers'>like</div>
                                        </div>
                                        <div>0 Comments</div>
                                    </div>
                                </div>                                
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentModule;