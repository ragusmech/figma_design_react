import React from 'react';

import { Navbar } from './components';
import { Header, Faq, FirstTime, Footer, HowToBuy, LatestNews } from './containers';

import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <HowToBuy />
            <LatestNews />
            <FirstTime />
            <Faq />
            <Footer />
        </div>
    )
}

export default App
