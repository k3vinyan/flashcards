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
            flex-direction: column;
            margin: 0 5px 5px 5px;
            
            p {
                display: inline-block;
                width: 100%;
                margin: 0;
            }

            p:first-child {
                border-bottom: dashed 1px $secondary-color;
                text-align: center;
                padding: 5px 0 5px 0;
            }

            p:nth-child(2) {
                height:inherit;
                padding: 10px 10px 10px 10px;    
            }
        }
        
    }
}



</style>