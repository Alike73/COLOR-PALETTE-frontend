import React, { useEffect, useState } from 'react';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import bannerImg from '../../../assets/images/pastelle-colors.svg';
import Editor from '../../editor/Editor';
import ColorsShelf from '../colors-shelf/ColorsShelf';
import { getAllPalettes } from '../../../api/ColorPalettesGrud';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../../utils/redux/CategorySlice';

const Main = () => {

    const [myPalettes, setMyPalettes] = useState([]);
    const selectedCategory = useSelector(getSelectedCategory);

    useEffect(() => {
        getAllPalettes(setMyPalettes)
    }, []);

    const filteredPalettes = myPalettes
    .filter((palette) => {
        if (selectedCategory === 'ALL') return true;
        return selectedCategory === palette.category;
    });


    return (
        <div className='page'>
            <Editor />
            <Header />
            <main className="container px-4 pt-5 pb-3">
                <Banner bannerImg = { bannerImg } />
                <ColorsShelf filteredPalettes = { filteredPalettes } />
            </main>
        </div>
    )
};

export default Main;