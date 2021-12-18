import React from 'react'
import './faq.css';
import Arrow from '../../assets/Arrow.png'
const Faq = () => {
    return (
        <div className='faq-main' id='faq'>
            <div className='faq-container'>
                <div className='faq-container-title'>
                    <h1>Frequently Asked <br /> Questions</h1> <br></br>
                    <p>Cannot find what you are looking for?<br /> Come ask on our Telegram or on our Discord!</p>
                </div>
                <br />
                <br />
                <div className='faq-container-body'>
                    <br />
                    <h1>What is LIL SHIKOKU? <img className='faq-container-body-image-first' src={Arrow} alt="" /></h1><br /><br /><br />
                    <p>Lil Shikoku is an ERC-20 token on the Ethereum blockchain defined <em>here.</em><br /> <br /> Originally a meme token without a team nor a project, acting as Doge's and Shiba Inu's smaller brother, it now has a strong<br /> community of 45,000+ holders, a dedicated team known as Polarfox Labs, and many moderators to help federate the community. <br /><br />The goal of the team is to convert this coin from a meme token to a real, useful token with various use cases.</p>
                    <br /><br /><br />
                    <h1>What is LIL SHIKOKU Network? <img className='faq-container-body-image' src={Arrow} alt="" /></h1><br /><br /><br />
                    <h1>What is Polarfox Labs? <img className='faq-container-body-image' src={Arrow} alt="" /></h1><br /><br /><br />
                    <h1>What is Pancake Sawp? <img className='faq-container-body-image' src={Arrow} alt="" /></h1><br /><br />
                </div>
            </div>
        </div>
    )
}

export default Faq
