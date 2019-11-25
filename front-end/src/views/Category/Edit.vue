<template>
     <div class="template-container">
        <header class="template-header">
            <input v-model="category.title" audofocus/>
            <button>import</button>
            <button>Save & Exit</button>
        </header>
        <div class="template-content">
            <card-form class="card-container" @createOrUpdate="create" :card="card"></card-form>
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
            cards: {}
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
    async mounted() {
        this.category = await api.cards.getCards(this.$route.params.id)
    }
}
</script>

