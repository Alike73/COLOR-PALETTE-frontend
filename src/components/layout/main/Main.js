import React from 'react';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import bannerImg from '../../../assets/images/pastelle-colors.svg';
import headerIcon from '../../../assets/images/palette.svg';

const Main = () => {

    return (
        <div className='page'>
            <Header headerIcon = { headerIcon } />
            <Banner bannerImg = { bannerImg } />
        </div>
    )
};

export default Main;