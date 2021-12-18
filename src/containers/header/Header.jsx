import React from 'react'
import './header.css';
import logo from '../../assets/logo.svg';
import Telegram from '../../assets/Telegram.png';
import Discord from '../../assets/Discord.png';
import Twitter from '../../assets/Twitter.png';
import header_img from '../../assets/header_img.svg';

const Header = () => {
    return (
        <div className='header-main' id='home'>
            <div className='header-content'>
                <div className='header-content-image'>
                    <img src={logo} alt="Logo" />
                </div>
                <h2>Social media <em>meets</em> DeFi</h2>
                <p>LIL SHIKOKU started as a meme.</p>
                <p> Now we'll bridge to Avalanche for project governance - empowering our community.</p>
                <div className='header-social'>
                    <button type='button'> <span>Join our Telegram</span> &nbsp;<img src={Telegram} alt="" /></button>&nbsp;
                    <button type='button'><span> Join our Discord</span>&nbsp;<img src={Discord} alt="" /></button>&nbsp;
                    <button type='button'><span> Join our Twitter</span>&nbsp;<img src={Twitter} alt="" /></button>&nbsp;
                </div>
            </div>
            <div className='header-image'>
                <img src={header_img} alt="header image" />
            </div>
        </div>
    )
}

export default Header
