<template>
    <div class="template-container">

        <header class="template-header">
            <ul class="template-header-list">
                <li class="template-header-item">
                    <button @click="viewEdit">Edit</button>
                </li>
                <li class="template-header-item">
                    <h1>{{category.title}}</h1>
                </li>
                <li class="template-header-item">
                    <button>Test</button>
                </li>
            </ul> 
        </header>

        <div class="template-content">
            <ul class="template-content-list">
                <li v-for="(card, i) in category.cards" :key="i" class="card">
                    <p>{{card.term}}</p>
                    <p>{{card.definition}}</p>
                </li> 
            </ul>
        </div>
    </div>
</template>

<script>
import { api } from '../../helpers/helpers'

export default {
    name: 'category-show',
    data: function() {
        return {
            category: {}
        }
    },
    methods: {
        viewEdit: function() {
            this.$router.push({ name: 'category-edit', params: { id: this.category._id } });        
        }
    },
    async mounted() {
        this.category = await api.categories.getCategory(this.$route.params.id);
    }
}
</script>

<style lang="scss" scoped>
@import '../../stylesheets/style.css.scss';

.template-header {
    h1 {
        color: #000000;
    }
}

.template-content {
    .template-content-list {
        li {
            border: solid 1px $secondary-color;
            display: flex;
            //justify-content: space-evenly;
            //align-items: space-evenly;
            flex-direction: column;
            margin: 10px 10px 10px 10px;
            text-align: center;
            height: 100px;

            p {
                display: inline-block;
                width: 100%;
                height: 50%;
            }

            p:first-child {
                border-bottom: dashed 1px $secondary-color;
            }
        }
        
    }
}



</style>