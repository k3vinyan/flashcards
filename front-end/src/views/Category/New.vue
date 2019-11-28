<template>
    <div class="template-container">
        <header class="template-header">
            <ul class="template-header-list">
                <li class="template-header-item">
                    <button @click="deleteCategory">Cancel & Exit</button>
                </li>
                <li class="template-header-item">
                    <input @change="updateCategory" v-model="category.title" autofocus/>
                </li>
                <li class="template-header-item">
                    <button @click="displaySaveForm">Save & Exit</button>
                </li>
            </ul>     
        </header>

        <div class="template-content">
           <card-form class="card-container" @createOrUpdate="createCard" :card="card"></card-form>
             <ul>
                <template v-if="category.cards">
                    <li v-for="(card, i) in category.cards" :key="i">
                        <a href="#">
                            <p>{{card.term}}</p>
                            <p>{{card.definition}}</p>
                        </a>
                    </li>
                </template>
            </ul>
        </div>
        <confirm-form 
            class="save-form" 
            :class="{hide: isHidden}" 
            :category="category" 
            @cancel="displaySaveForm" 
            @saveAndExit="saveAndExit"
        >
        </confirm-form>
    </div>

</template>

<script>

import CardForm from '../../components/CForm.vue'
import ConfirmForm from '../../components/ConfirmForm.vue'
import { api } from '../../helpers/helpers'

export default {
    name: 'category-new',
    components: {
        'card-form': CardForm,
        'confirm-form': ConfirmForm
    },
    data: function() {
        return {
            category: {},
            card: {},
            isHidden: true
        }
    },
    methods: {
        updateCategory: async function() {
            this.category = await api.categories.updateCategory(this.category);       
        },
        deleteCategory: async function() {
            await api.categories.deleteCategory(this.category);
            this.$router.push({ name: 'categories'})
        },
        createCard: async function(card) {
            const payload = {
                category: this.category,
                card: card
            }
            this.category = await api.cards.createCard(payload);
        },
        saveAndExit: function(category) {
            this.updateCategory(category);
            this.$router.push({ name: 'category-show', params: {id: category._id} })
        },
        displaySaveForm: function() {
            if(this.isHidden === true) {
                this.isHidden = false;
            } else {
                this.isHidden = true;
            }
        }
    },
    async mounted() {
        if(this.$route.name === "category-new") {
            this.category = await api.categories.createCategory({ title: "Untitled Flashcard" });
        } else {
            this.category = await api.categories.getCategory(this.$route.params.id);
        }
    }
}
</script>

<style lang="scss" scoped>

.template-container {
    position: relative;
    height: 100%;

    .template-header {

        .template-header-list {
            display: flex;
            list-style-type: none;
            padding: 0;

            .template-header-item {
                text-align: center;
            }
        }
        input {
            text-align: center;
            color: lightblue;
            font-weight: bold;
        }
    }

    .template-content {
        height: 90%;
        .card-container {
            height: 100%;
        }
    }

    .save-form {
        position: absolute;
        text-align: center;
        top: 0;
        background: rgb(220, 220, 220);
        background: rgba(220, 220, 220, .5);
        width: 100%;
        height: 100%;
    }

    .hide {
        display: none
    }

    .show {
        display: block
    }
}
</style>