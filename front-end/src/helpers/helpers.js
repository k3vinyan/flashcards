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
    updateCategory: async id => {
        try {
            const url = createURL(id);
            const res = await axios.put(url);
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    deleleCategory: async id => {
        try {
            const url = createURL(id);
            console.log('id ', id)
            console.log(url)
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
            const url = createURL(payload.categoryId, undefined, "POST");
            console.log(payload)
            const res = await axios.post(url, payload.data);
            console.log("ddsfdf", res.data)
            return res.data;
        } catch(e) {
            console.error(e);
        }
    },
    updateCard: async payload => {
        try {
            const url = createURL(payload.categoryId, payload.cardId)
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