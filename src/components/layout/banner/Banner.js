import React from 'react';
import EditorOpenBtn from '../../shared/buttons/EditorOpenBtn';
import { useSelector } from 'react-redux';
import { getActiveOpenEditorBtn } from '../../../utils/redux/EditorSlice';

const Banner = ({ bannerImg }) => {

    const isActiveOpenBtn = useSelector(getActiveOpenEditorBtn);

    return (
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-3 pb-5 mb-5 banner__bg">
            <div className="col-10 col-sm-8 col-lg-6">
                <img 
                    src={ bannerImg } 
                    className="d-block mx-lg-auto img-fluid banner__img" 
                    alt="Bootstrap Themes" 
                    width="400" 
                    loading="lazy" 
                />
            </div>
            <div className="col-lg-6">
                <h1 className="display-1 fw-bold lh-1 text-center mb-5 pb-5">
                    Color Palette
                </h1>
                { isActiveOpenBtn && <EditorOpenBtn />}
            </div>
        </div>
    )
};

export default Banner;