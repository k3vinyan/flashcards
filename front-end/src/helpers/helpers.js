import axios from 'axios';

const baseURL = 'http://localhost:3000/cards/';

export const api = {
    getCard: async id => {
        try {
            const res = await axios.get(baseURL + id);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    getCards: async () => {
        try {
            const res = await axios.get(baseURL);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    createCard: async payload => {
        try {
            const res = await axios.post(baseURL, payload);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    updateCard: async payload => {
        try {
            const res = await axios.post(baseURL + payload._id, payload);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    deleteCard: async id => {
        try {
            const res = await axios.delete(baseURL + id);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    }
}