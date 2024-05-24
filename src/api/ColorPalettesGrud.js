import axios from 'axios';

const myURL = 'http://localhost:7000';

// http://localhost:7000
// 

// GET:
const getAllPalettes = (setMyPalettes) => {
    axios.get(`${myURL}`)
    .then(({data}) => { // console.log(data)
        setMyPalettes(data)
    })
}

// POST:
const addPalette = (
    title, setTitle, category, setCategory, color_1, setColor_1, color_2, setColor_2, color_3, setColor_3, color_4, setColor_4,  setMyPalettes
    ) => {
    axios.post(`${myURL}/savePalette`, { title, category, color_1, color_2, color_3, color_4 })
    .then((data) => {
        // console.log(data)
        setTitle("")
        setCategory("")
        setColor_1("")
        setColor_2("")
        setColor_3("")
        setColor_4("")
        getAllPalettes(setMyPalettes)
    })
};

// PUT:
const editPalette = (
    paletteId, title, setTitle, category, setCategory, color_1, setColor_1, color_2, setColor_2, color_3, setColor_3, color_4, setColor_4, setMyPalettes, setEditing
    ) => {
    axios.post(`${myURL}/editPalette`, { _id: paletteId, title, category, color_1, color_2, color_3, color_4 })
    .then((data) => {
        // console.log(data)
        setTitle("")
        setCategory("")
        setColor_1("")
        setColor_2("")
        setColor_3("")
        setColor_4("")
        setEditing(false)
        getAllPalettes(setMyPalettes)
    })
};

const deletePalette = (_id, setMyPalettes) => {
    axios.post(`${myURL}/deletePalette`, { _id })
    .then((data) => {
        // console.log(data)
        getAllPalettes(setMyPalettes)
    })
};;

export { getAllPalettes, addPalette, editPalette, deletePalette };