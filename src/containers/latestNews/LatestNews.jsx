import React from 'react'
import './latestNews.css';
import CatFace from '../../assets/cat-face.png'

const LatestNews = () => {
    return (
        <div className='latestnews-main' id='news'>
            <div className='latestnews-container'>
                <div className='latestnews-container-title'>
                    <h1>Latest News</h1>
                </div>
                <br />
                <div className='latestnews-image-container-section'>
                    <div className='latestnews-image-container'>
                        <div className='latestnews-main-image'>
                            <img src={CatFace} alt="" />
                        </div>
                        <div className='latestnews-sub-image'>
                            <div className='latestnews-sub-image-1'>
                                <img src={CatFace} alt="" />
                                <img src={CatFace} alt="" />
                            </div>
                            <div className='latestnews-sub-image-2'>
                                <img src={CatFace} alt="" />
                                <img src={CatFace} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='latestnews-image-container'>
                        <div className='latestnews-sub-image'>
                            <div className='latestnews-sub-image-1'>
                                <img src={CatFace} alt="" />
                                <img src={CatFace} alt="" />
                            </div>
                            <div className='latestnews-sub-image-2'>
                                <img src={CatFace} alt="" />
                                <img src={CatFace} alt="" />
                            </div>
                        </div>
                        <div className='latestnews-main-image'>
                            <img src={CatFace} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LatestNews
