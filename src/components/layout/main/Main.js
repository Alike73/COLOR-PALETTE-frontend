import React from 'react';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import bannerImg from '../../../assets/images/pastelle-colors.svg';
import Editor from '../../editor/Editor';
import ColorsShelf from '../colors-shelf/ColorsShelf';

const Main = () => {

    

    return (
        <div className='page'>
            <Editor />
            <Header />
            <main className="container px-4 pt-5 pb-3">
                <Banner bannerImg = { bannerImg } />
                <ColorsShelf />
            </main>
        </div>
    )
};

export default Main;