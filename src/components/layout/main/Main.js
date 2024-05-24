import React, { useEffect, useState } from 'react';
import { addPalette, editPalette, getAllPalettes } from '../../../api/ColorPalettesGrud';
import { useSelector } from 'react-redux';
import { getSearchTerm, getSelectedCategory } from '../../../utils/redux/CategorySlice';
import Swal from 'sweetalert2';
import Banner from '../banner/Banner';
import Header from '../header/Header';
import bannerImg from '../../../assets/images/pastelle-colors.svg';
import Editor from '../../editor/Editor';
import ColorsShelf from '../colors-shelf/ColorsShelf';

const Main = () => {

    const [myPalettes, setMyPalettes] = useState([]);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [color_1, setColor_1] = useState('');
    const [color_2, setColor_2] = useState('');
    const [color_3, setColor_3] = useState('');
    const [color_4, setColor_4] = useState('');
    const [editing, setEditing] = useState(false);
    const [paletteId, setPaletteId] = useState("");
    const selectedCategory = useSelector(getSelectedCategory);
    const searchTerm = useSelector(getSearchTerm);

    useEffect(() => {
        getAllPalettes(setMyPalettes)
    }, []);

    const updatingInInput = (_id, title, category, color_1, color_2, color_3, color_4) => {
        setPaletteId(_id)
        setTitle(title)
        setCategory(category)
        setColor_1(color_1)
        setColor_2(color_2)
        setColor_3(color_3)
        setColor_4(color_4)
        setEditing(true);
    };

    const filteredPalettes = myPalettes
    .filter((palette) => {
        if (selectedCategory === 'ALL') return true;
        return selectedCategory === palette.category;
    })
    .filter((palette) => {
        if (searchTerm === '') return true;
        return palette.category.toLowerCase().includes(searchTerm.toLowerCase());
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editing) {
                    editPalette(paletteId, title, setTitle, category, setCategory, color_1, setColor_1, color_2, setColor_2, color_3, setColor_3, color_4, setColor_4, setMyPalettes, setEditing)
                }
                else {
                    addPalette(title, setTitle, category, setCategory, color_1, setColor_1, color_2, setColor_2, color_3, setColor_3, color_4, setColor_4,  setMyPalettes)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };


    return (
        <div className='page'>
            <Editor 
            handleSubmit = { handleSubmit } 
            editing = { editing }
            title = { title }
            setTitle = { setTitle }
            category = { category }
            setCategory = { setCategory }
            color_1 = { color_1 }
            setColor_1 = { setColor_1 }
            color_2 = { color_2 }
            setColor_2 = { setColor_2 }
            color_3 = { color_3 }
            setColor_3 = { setColor_3 }
            color_4 = { color_4 }
            setColor_4 = { setColor_4 }
            />
            <Header filteredPalettes = { filteredPalettes } />
            <main className="container px-4 pt-5 pb-3">
                <Banner 
                bannerImg = { bannerImg } 
                setEditing = { setEditing } 
                setTitle = { setTitle } 
                setCategory = { setCategory }
                setColor_1 = { setColor_1 }
                setColor_2 = { setColor_2 }
                setColor_3 = { setColor_3 }
                setColor_4 = { setColor_4 }
                />
                <ColorsShelf 
                    filteredPalettes = { filteredPalettes } 
                    updatingInInput = { updatingInInput }
                    setMyPalettes = { setMyPalettes } 
                />
            </main>
        </div>
    )
};

export default Main;