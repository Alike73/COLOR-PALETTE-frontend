import axios from 'axios';

const myURL = 'http://localhost:7000';

// GET:
const getMyPermission = (setPermission) => {
    axios.get(`${myURL}/getMyPermission`)
    .then(({data}) => { //console.log(data)
        setPermission(data)
    })
};

export { getMyPermission };