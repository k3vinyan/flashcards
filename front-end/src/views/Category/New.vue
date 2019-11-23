<template>
    <div>
        <header>
            <input v-model="category.title" />
            <button>import</button>
            <button>Save & Exit</button>
        </header>
        <card-form @createOrUpdate="create" :card="card"></card-form>
        <ul>
            <template v-if="cards">
            <li v-for="(card, i) in cards" :key="i">
                <a href="#">

                    <p>{{card.term}}</p>
                    <p>{{card.definition}}</p>
                
                </a>
                
            </li>
            </template>
        </ul>
    </div>

</template>

<script>

import CardForm from '../../components/CForm.vue'
import { api } from '../../helpers/helpers'

export default {
    name: 'category-new',
    components: {
        'card-form': CardForm
    },
    data: function() {
        return {
            category: { title:'Untitiled Flashcard' },
            card: {},
            cards: {},
            isCategorySet: false
        }
    },
    methods: {
        create: async function(card) {
            if(!this.categoryName) {
                this.category = await api.categories.createCategory({title: this.category.title})
                this.isCategorySet = true;
            }
            const payload = {
                data: card,
                categoryId: this.category._id
            }
            this.update(payload);
        },
        update: async function(card) {
            this.cards = await api.cards.createCard(card);
            console.log(this.cards)
        }
    },
    async mount() {
        
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: center;
}



</style>