<template>
    <div class="template-container">

        <header class="template-header">
            <ul class="template-header-list">
                <li class="template-header-item">
                    <button @click="removeCard">remove</button>
                </li>
                <li class="template-header-item">
                    <input @change="updateCategory" v-model="category.title" autofocus/>
                </li>
                <li class="template-header-item">
                    <button @click="viewShow">View</button>
                </li>
            </ul>     
        </header>

        <div class="template-content">
           <card-form class="template-content-card-container" @createOrUpdate="createCard" :card="card"></card-form>
             <ul class="template-content-card-list">
                <template v-if="cardCount === 0">
                    <li class="template-content-card-item-placeholder">
                        <p>Set of Cards</p>
                    </li>
                </template>
                <!-- for now only show term for moblie -->
                 <template v-else>
                    <li v-for="(card, i) in category.cards" :key="i" @click="selectCard(card)" :class="{selected: card.selected}" class="template-content-card-item">
                        <a href="#" >
                            <p>{{card.term}}</p>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
    </div>

</template>

<script>

import CardForm from '../../components/CardForm.vue'
import { api } from '../../helpers/helpers'

export default {
    name: 'category-new',
    components: {
        'card-form': CardForm
    },
    data: function() {
        return {
            category: {},
            card: {},
            isHidden: true,
            isSave: false,
            selected: false,
            cardCount: 0
        }
    },
    methods: {
        updateCategory: async function() {
            this.category = await api.categories.updateCategory(this.category);       
        },
        createCard: async function(card) {
            const payload = {
                category: this.category,
                card: card
            }
            this.category = await api.cards.createCard(payload);
            this.card = "";
            this.updateCardCount();
        },
        selectCard: function(card){
            this.card = card;
            card.selected = true;
            this.deselectCard(card);
        },
        deselectCard: function(card){
            for(let c in this.category.cards) {
                if(card._id != this.category.cards[c]._id) {
                    this.category.cards[c].selected = false;
                }
            }
        },
        removeCard: async function() {
            const payload = {
                categoryId: this.category._id,
                cardId: this.card._id
            }
            this.category = await api.cards.deleteCard(payload);
            this.card = "";
        },
        updateCardCount: function() {
            this.cardCount = this.category.cards.length;
        },
        viewShow: function() {
            this.$router.push({ name: 'category-show', params: {id: this.category._id} })
         }
    },
    async mounted() {
        if(this.$route.name === "category-new") {
            this.category = await api.categories.createCategory({ title: "Untitled Flashcard" });
            this.cardCount = this.category.cards.length;
            this.updateCardCount();
        } else {
            this.category = await api.categories.getCategory(this.$route.params.id);
            this.cardCount = this.category.cards.length;
            this.updateCardCount();
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../stylesheets/style.css.scss';

.template-container {
    
    .template-content {
        height: 80%;

        .template-content-card-list {

            height: 20%;
            display: flex;
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow-x: scroll;

            .template-content-card-item {
                display: inline-block;
                border: solid 1px $secondary-color;
                width: 200px;
                height: 100px;
                margin: 2px 2px 2px 12px;
                overflow: hidden;
    
                a {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;

                    p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 50%;
                        width: 100%;
                        padding: 0;
                        margin: 0;
                    }
                }
            }
        }

        .template-content-card-item-placeholder {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
            width: 100%;
            color: $light-grey-color;
            font-weight: bold;
            font-size: $large-font;
                
            p {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        
        }
    }

    
}


.hide {
    display: none;
}

.show {
    display: block;
}

.selected {
    background: $primary-color;

    p {
        color: $font-color;
    }
}
</style>