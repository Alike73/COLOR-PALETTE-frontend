import axios from 'axios';

const myURL = 'https://color-palette-backend.onrender.com';

// http://localhost:7000
// https://color-palette-backend.onrender.com

// GET:
const getMyPermission = (setPermission) => {
    axios.get(`${myURL}/getMyPermission`)
    .then(({data}) => { //console.log(data)
        setPermission(data)
    })
};

export { getMyPermission };