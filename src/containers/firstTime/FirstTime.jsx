import React from 'react'
import './firstTime.css';
import Image1 from '../../assets/1.svg';
import Image2 from '../../assets/2.png';
import Image3 from '../../assets/3.png';
import Image4 from '../../assets/4.png';
import Image5 from '../../assets/5.png';
import Image6 from '../../assets/6.png';

const FirstTime = () => {
    return (
        <div className='firsttime-main'>
            <div className='firsttime-container'>
                <div className='firsttime-container-title-section'>
                    <h1>First Time ?</h1>
                    <p>This is a step by step instruction on <br />how to buy LIL SHIKOKU <em> with Metamask</em>.</p>
                </div>
                <br />
                <br />
                <div className='firsttime-container-section'>
                    <div className='firsttime-container-section-row'>
                        <div className='firsttime-container-section-row-1'>
                            <div className='firsttime-container-section-1'>
                            <img src={Image1} alt="" />
                                <h1>Download Metamask</h1><br />
                                <p>Go to <em> Metamask</em> and load the app. <br />Follow the in-app-tutorial, log in and get started.  <br /> <br />Don't forget to write down your private pass-phrase  <br />(don't lose it!).</p>
                            </div>
                            <div className='firsttime-container-section-1'>
                                <img src={Image2} alt="" />
                                <h1>Buy Ethereum</h1><br />
                                <p>Get some ETH at your preferred exchange.</p>
                            </div>
                            <div className='firsttime-container-section-1'>
                                <img src={Image3} alt="" />
                                <h1>Transfer to Metamask</h1><br />
                                <p>Copy your Metamask address and transfer ETH to your wallet.</p>

                            </div>
                        </div>
                        <br />
                        <br />
                        <div className='firsttime-container-section-row-1'>
                            <div className='firsttime-container-section-1'>
                                <img src={Image4} alt="" />
                                <h1>Connect to Uniswap</h1><br />
                                <p>Find the official LIL SHIKOKU contract address here <br /> (copy contract on top right corner) and connect  <br /> your wallet to <em> Uniswap.</em></p>
                            </div>
                            <div className='firsttime-container-section-1'>
                                <img src={Image5} alt="" />
                                <h1>Swap</h1><br />
                                <p>Select From: ETH; To: Paste in official LIL SHIKOKU  <br /> contract adress and click import.  <br />  <br /> Put in the ETH-amount you wish to swap. <br />  Make sure you got enough ETH for the transaction fee  <br /> (edit the fee to make sure transaction runs smoothly).</p>
                            </div>
                            <div className='firsttime-container-section-1'>
                                <img src={Image6} alt="" />
                                <h1>Add liquidity</h1><br />
                                <p>If you wish, add liquidity to the ETH-LIL SHIKOKU <br /> pair on Uniswap.</p>
                            </div>
                        </div>

                    </div>
                    <div className='firsttime-container-section-row'>

                    </div>


                </div>
            </div>
            <div className='firsttime-main'></div>
        </div>
    )
}

export default FirstTime
