import React from 'react';
import TinPaintOpenEditor from './TinPaintOpenEditor';

const Banner = ({ bannerImg, setEditing, setTitle, setCategory, setColor_1, setColor_2, setColor_3, setColor_4 }) => {

    return (
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-3 pb-5 mb-5 banner__bg">
            <div className="col-10 col-sm-8 col-lg-5">
                <img 
                    src={ bannerImg } 
                    className="d-block mx-lg-auto img-fluid banner__img" 
                    alt="Bootstrap Themes" 
                    width="400" 
                    loading="lazy" 
                />
            </div>
            <div className="col-lg-7">
                <h1 className="fw-bold lh-1 text-center mb-5 pb-5">
                    Color Palettes
                </h1>
                <div className="d-flex justify-content-center">
                    <TinPaintOpenEditor 
                    setEditing = { setEditing } 
                    setTitle = { setTitle } 
                    setCategory = { setCategory }
                    setColor_1 = { setColor_1 }
                    setColor_2 = { setColor_2 }
                    setColor_3 = { setColor_3 }
                    setColor_4 = { setColor_4 }
                    />
                </div>
            </div>
        </div>
    )
};

export default Banner;