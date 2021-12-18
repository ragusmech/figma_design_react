import React from 'react'
import './howToBuy.css';
import Cat from "../../assets/Cat.png"
import Link from "../../assets/link.png"
import Dollar from "../../assets/dollar.png"

const HowToBuy = () => {
    return (
        <div className='howtobuy-main' id='howToBuy'>
            <div className='howtobuy-container'>
                <div className='howtobuy-image'>
                    <img src={Cat} alt="" />
                </div>
                <div className='howtobuy-content'>
                    <h1>How to buy<br />on Pancake Swap</h1>
                    <p>Make sure you paste in the correct address.</p>
                    <div className='howtobuy-link-1'>
                        <div className='howtobuy-link-1-image'>
                            <img src={Link} alt="" />&nbsp;&nbsp;
                            <h4>Connect your wallet <br /> & Swap ETH/LIL SHIKOKU</h4>
                        </div>
                        <p>Make sure you adapt to price slippage and got enough ETH <br />for the fees in your wallet.</p>
                    </div>
                    <div className='howtobuy-link-2'>
                        <div className='howtobuy-link-2-image'>
                            <img src={Dollar} alt="" />&nbsp;&nbsp;
                            <h4>Add liquidity</h4>
                        </div>
                        <p>Would you like to add liquidity to Uniswap Pool? <br />Check the pair here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToBuy
