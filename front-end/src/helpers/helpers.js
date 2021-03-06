import axios from 'axios';

const createURL = function(categoryId, cardId, method) {
    const baseURL = 'http://localhost:3000/categories/';
    if(categoryId === undefined && cardId === undefined) {
        return baseURL;
    }
    if(categoryId && cardId === undefined) {
        if(method === "GET") {
            return baseURL + categoryId;
        }
        if(method === "POST") {
            return baseURL + categoryId + '/cards'
        }

        return baseURL + categoryId;
    }
    if(categoryId && cardId) {
        return baseURL + categoryId + '/cards/' + cardId;
    }
}

const categories = {
    getCategory: async id => {
        console.log(id)
        try{
            const url = createURL(id);
            const res = await axios.get(url);

            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    getCategories: async () => {
        try {
            const url = createURL();
            const res = await axios.get(url);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    createCategory: async payload => {
        try {
            const url = createURL();
            const res = await axios.post(url, payload);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    updateCategory: async category => {
        try {
            const url = createURL(category._id);
            const res = await axios.put(url, category);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    deleteCategory: async category => {
        console.log(category)
        try {
            const url = createURL(category._id);
            const res = await axios.delete(url);
            return res.data;
        } catch(e) {
            console.log(e);
        }
    }

}


const cards = {
    getCard: async payload => {
        try {
            const url = createURL(payload.categoryId, payload.cardId);
            const res = await axios.get(url);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    getCards: async categoryId => {
        try {
            const url = createURL(categoryId);
            const res = await axios.get(url);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    createCard: async payload => {
        try {
            const url = createURL(payload.category._id, undefined, "POST");
            const res = await axios.post(url, payload.card);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    updateCard: async payload => {
        try {
            const url = createURL(payload.categoryId, payload.cardId)
            console.log(url)
            const res = await axios.put(url, payload.data);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    deleteCard: async payload => {
        try {
            const url = createURL(payload.categoryId, payload.cardId)
            const res = await axios.delete(url);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    }
}

export const api = {
    cards: cards,
    categories: categories
}