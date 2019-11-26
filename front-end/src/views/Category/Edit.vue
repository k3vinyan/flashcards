<template>
     <div class="template-container">

        <header class="template-header">
            <input v-model="category.title" audofocus/>
            <button>New</button>
            <button>import</button>
             <router-link to="/categories/">
                <button>Save & Exit</button>
            </router-link>
        </header>

        <div class="template-content">
            <card-form class="card-container" @createOrUpdate="update" :card="card"></card-form>
            <div class="card-list">
                <ul v-if="category.cards">
                    <li v-for="(card, i) in category.cards" :key="i" @click="selectCard(card)">
                        <a href="#">
                            <p>{{card.term}}</p>
                            <p>{{card.definition}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
import { api } from '../../helpers/helpers'
import CardFrom from '../../components/CForm'

export default {
    name: "category-edit",
    components: {
        'card-form': CardFrom
    },
    data: function() {
        return {
            category: {},
            card: {},
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
            console.log("card", card)
            const payload = {
                data: card,
                categoryId: this.$route.params.id,
                cardId: card._id
            }
            this.cards = await api.cards.updateCard(payload);
            this.card = {};
        },
        selectCard: function(card) {
            this.card = card;
        }
    },
    async mounted() {
        this.category = await api.cards.getCards(this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>
.template-container {
    height: 100%;

    .template-header {
        
        input {
            color: lightblue;
            font-weight: bold;
        }
    }

    .template-content {
        height: 80%;

        .card-container {
            height: 100%;
        }


        .card-list {
            height: 20%;

            ul {
                display: flex;
                list-style-type: none;
                justify-content: space-around;
                height: 90%; 
                padding: 0; 

            li {

                flex: 1 1 50px;
                overflow: hidden;
                overflow-y: hidden;
                align-items: flex-start;
                border: 1px solid lightblue;
                text-align: center;

            }
        }
        }
        
    }
}
</style>