import axios from 'axios';

const baseURL = 'http://localhost:3000/cards';

const handleError = fn => (...params) => {
    fn(...params).catch(err => {
        console.log(err);
    })
}

export const api = {
    getCard: handleError(async id => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    getCards: handleError(async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }),
    deleteCard: handleError(async id => {
        const res = await axios.delete(baseURL + id);
        return res.data;
    }),
    createCard: handleError(async payload => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    }),
    updateWord: handleError(async payload => {
        const res = await axios.put(baseURL + payload._id, payload);
        return res.data;
    })
}