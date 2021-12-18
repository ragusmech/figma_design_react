import React from 'react'
import './footer.css';
import Logo from '../../assets/Frame.svg';
import Telegram from '../../assets/Telegram.png';
import Discord from '../../assets/Discord.png';
import Twitter from '../../assets/Twitter.png';


const Footer = () => {
    return (
        <div className='footer-main'>
        <div className='footer-container'>
            <div className='footer-container-logo'>
                <img src={Logo} alt="" /> 
                <br></br>
                <br></br>
                <br></br>
                <p>lil Shikoku © 2021. <br></br>All rights reserved.</p>
                <br></br>
                <br></br>
                <p>Site by Mojo Digital</p>
            </div>
            <div className='footer-container-menu'>
                <p><a href="#home">Home</a></p>
                <p><a href="#howToBuy">How to buy</a></p>
                <p><a href="#news">News</a></p>
                <p><a href="#faq">FAQ</a></p>
            </div>
            <div className='footer-container-social'>
                <h1>Join the conversation!</h1>
                <p><img src={Telegram} alt="" /> Telegram</p>
                <p><img src={Discord} alt="" /> Discord</p>
                <p><img src={Twitter} alt="" /> Twitter</p>
            </div>
        </div>
        </div>
    )
}

export default Footer
