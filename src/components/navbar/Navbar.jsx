import React from 'react'
import logo from "../../assets/logo.png";
import './navbar.css';
import { RiMenu3Line, RicloseLin } from 'react-icons/ri';


const Navbar = () => {
    return (
        <div className='navbar-main'>
            <div className='navbar-links'>
                <div className='navbar-links_logo'>
                    <img src={logo} alt="Logo" />
                </div>
                <div className='navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#howToBuy">How to buy</a></p>
                    <p><a href="#news">News</a></p>
                    <p><a href="#faq">FAQ</a></p>
                </div>
                <div className='navbar-sign'>
                        <button type="button">Install Metamask</button>
                    </div>
            </div>
        </div>
    )
}

export default Navbar
