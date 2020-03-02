import React from 'react';
import { LikeOutlined } from '@ant-design/icons';

import './style.css';
import CommentModule from '../../../module/CommentModule';
import PartRevolution from '../../../components/PartRevolution';
import PersonCardModule from '../../../module/PersonCardModule';
import ContactInfoModule from '../../../module/ContactInfoModule';

const cards = [
    { 
        title:"Title of the blog or article will be here",
        auther:"Sebastian Bennett",
        date: '2020-2-22',
        text:"Lorem ipsum dolor sit amet conse adipiscing elit curabitur vitae luctus elit roin vulputate sed dui non faucibus. Etiam eleifend lectus tempor sodales vel semper diam lobortis.",
        background_image:'https://secure.skypeassets.com/content/dam/scom/home/features/features-skype-number.jpg',
        photo: '/assets/images/team-members/member3.png',
    },
];

const skills = [
    { skill: 'Blockchain' }, 
    { skill: 'Cryptocurrency' }, 
    { skill: 'Cions' }, 
    { skill: 'Cions' }, 

];

const contact_information = [
    { name: 'Robert wesker', job: 'CEO & Co-Founder', facebook: 'https://facebook.com', linkedin: 'https://linkedin.com', twiter: 'https://twiter.com', photo: '/assets/images/team-members/member3.png', }
];

class BlogPostPage extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
        }

        this.props.changeSpecialClass('blog');
    }

    render () {
        return (
            <div className='blog-post'>
                <div className='blog-post-clip-effect'></div>
                {/* <div className='top-title'>Our blog-post</div> */}
                <div className='contents'>
                    <div className='auth'>
                        <div className='auth-character'>
                            <img src={cards[0].photo} alt='person-image1' />
                        </div>
                        <div className='auth-title'>What is Blockchain Technology</div>
                        <div className='auth-col-set d-flex justify-content-center'>
                            <div className='auth-name'>Auther name</div>
                            <div className='auth-date'>2-22-2020</div>
                        </div>
                        {/* <div className='auth-article'>
                            The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?
                        </div> */}
                        <div className='blog-first-paragraph'>
                            <div className='paragraph-content'>
                                <p>The blockchain is an undeniably ingenious invention – the brainchild of a person or group of people known by the pseudonym, Satoshi Nakamoto. But since then, it has evolved into something greater, and the main question every single person is asking is: What is Blockchain?</p>
                                <h5>Is Blockchain Technology the New Internet?</h5>
                                <p>By allowing digital information to be distributed but not copied, blockchain technology created the backbone of a new type of internet. Originally devised for the digital currency, Bitcoin blockchain, (Buy Bitcoin) the tech community has now found other potential uses for the technology.</p>
                                <br />
                                <p>In this guide, we are going to explain to you what the blockchain technology is, and what its properties are what make it so unique. So, we hope you enjoy this, What Is Blockchain Guide. And if you already know what blockchain is and want to become a blockchain developer please check out our in-depth blockchain tutorial and create your very first blockchain.</p>
                                <img src='/assets/images/pharagraph-image.png' alt='phragraph-image1' />
                                <p>A blockchain is, in the simplest of terms, a time-stamped series of immutable records of data that is managed by a cluster of computers not owned by any single entity. Each of these blocks of data (i.e. block) is secured and bound to each other using cryptographic principles (i.e. chain).</p>
                                <br />
                                <p>So, what is so special about it and why are we saying that it has industry-disrupting capabilities?</p>
                                <br />
                                <p>The blockchain network has no central authority — it is the very definition of a democratized system. Since it is a shared and immutable ledger, the information in it is open for anyone and everyone to see. Hence, anything that is built on the blockchain is by its very nature transparent and everyone involved is accountable for their actions.</p>
                                <br />
                                <h5>A blockchain carries no transaction cost.</h5>
                                <p>(An infrastructure cost yes, but no transaction cost.) The blockchain is a simple yet ingenious way of passing information from A to B in a fully automated and safe manner. One party to a transaction initiates the process by creating a block. This block is verified by thousands, perhaps millions of computers distributed around the net. The verified block is added to a chain, which is stored across the net, creating not just a unique record, but a unique record with a unique history. Falsifying a single record would mean falsifying the entire chain in millions of instances. That is virtually impossible. Bitcoin uses this model for monetary transactions, but it can be deployed in many other ways.</p>
                                <br />
                                <p>Think of a railway company. We buy tickets on an app or the web. The credit card company takes a cut for processing the transaction. Blockchains, not only can the railway operator save on credit card processing fees, it can move the entire ticketing process to the blockchain. The two parties in the transaction are the railway company and the passenger. The ticket is a block, which will be added to a ticket blockchain. Just as a monetary transaction on the blockchain is a unique, independently verifiable and unfalsifiable record (like Bitcoin), so can your ticket be. Incidentally, the final ticket blockchain is also a record of all transactions for, say, a certain train route, or even the entire train network, comprising every ticket ever sold, every journey ever taken.</p>
                                <br />
                                <p>But the key here is this: it’s free. Not only can the blockchain transfer and store money, but it can also replace all processes and business models that rely on charging a small fee for a transaction. Or any other transaction between two parties.</p>
                                <br />
                                <p>Here is another example. The gig economy hub Fivver charges 0.5 dollars on a 5 transaction between individuals buying and selling services. Using blockchain the transaction is free. Ergo, Fivver will cease to exist. So will auction houses and any other business entity based on the market-maker principle.</p>
                                <br />
                                <p>Even recent entrants like Uber and Airbnb are threatened by blockchain . All you need to do is encode the transactional information for a car ride or an overnight stay, and again you have a perfectly safe way that disrupts the business model of the companies which have just begun to challenge the traditional economy. We are not just cutting out the fee-processing middle man, we are also eliminating the need for the match-making platform.</p>
                                <br />
                                <p>Because blockchain transactions are free, you can charge minuscule amounts, say 1/100 of a cent for a video view or article read. Why should I pay The Economist or National Geographic an annual subscription fee if I can pay per article on Facebook or my favorite chat app? Again, remember that blockchain transactions carry no transaction cost. You can charge for anything in any amount without worrying about third parties cutting into your profits.</p>
                                <br />
                                <p>Blockchain may make selling recorded music profitable again for artists by cutting out music companies and distributors like Apple or Spotify. The music you buy could even be encoded in the blockchain itself, making it a cloud archive for any song purchased. Because the amounts charged can be so small, subscription and streaming services will become irrelevant.</p>
                                <br />
                                <p>It goes further. Ebooks could be fitted with blockchain code. Instead of Amazon taking a cut, and the credit card company earning money on the sale, the books would circulate in encoded form and a successful blockchain transaction would transfer money to the author and unlock the book. Transfer ALL the money to the author, not just meager royalties. You could do this on a book review website like Goodreads, or on your own website. The marketplace Amazon is then unnecessary. Successful iterations could even include reviews and other third-party information about the book.</p>
                                <br />
                                <p>In the financial world the applications are more obvious and the revolutionary changes more imminent. Blockchains will change the way stock exchanges work, loans are bundled, and insurances contracted. They will eliminate bank accounts and practically all services offered by banks. Almost every financial institution will go bankrupt or be forced to change fundamentally, once the advantages of a safe ledger technology without transaction fees are widely understood and implemented. After all, the financial system is built on taking a small cut of your money for the privilege of facilitating a transaction. Bankers will become mere advisers, not gatekeepers of money. Stockbrokers will no longer be able to earn commissions and the buy/sell spread will disappear.</p>
                            </div>
                            <Skills />
                            <div className='person-option-group d-flex justify-content-between'>
                                <div className='favorite d-flex align-items-center'>
                                    <div className='favorite-icon'><LikeOutlined /> </div>
                                    <div className='favorite-numbers'>31.52K like this</div>
                                </div>
                                <ContactInfoModule person_infor={contact_information[0]} />
                            </div>
                            <hr />
                            <PersonCardModule person={cards[0]} person_infor={contact_information[0]} />
                        </div>
                    </div>
                </div>
                <CommentModule commenter={cards[0]} />    
                <PartRevolution />
            </div>
        );
    }
}

const Skills = () => {
    return (
        <div className='skills d-flex justify-content-start flex-wrap'>
            {
                skills.map((data, i) => (
                    <span key={i} className='skill' >{data.skill}</span>
                ))
            }
        </div>
    );
}

export default BlogPostPage;