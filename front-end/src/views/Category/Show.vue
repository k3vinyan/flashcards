<template>
    <div class="template-container">
        <header class="template-header">
            <h1>Show Category</h1>
            <button>
            <router-link :to="'/categories/' + this.category._id + '/cards/edit'">
                <i class="big plus circle icon"></i>
            </router-link>
            </button>
        </header>
        <div class="template-content">
            <ul>
                <li v-for="(card, i) in category.cards" :key="i" class="card">
                    <div>{{card.term}}</div>
                    <hr/>
                    <div>{{card.definition}}</div>
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
    async mounted() {
        this.category = await api.categories.getCategory(this.$route.params.id)
        
    }
}
</script>

<style lang="scss" scoped>

@mixin blue-border {
    border: 1px lightblue solid;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

hr {
    border-style: dashed;
    border-color: lightblue;
    margin: 5px 10px 5px 10px;
}

.template-header {
    display: flex;
}

.card {
    @include blue-border;
    margin: 10px 10px 10px 10px;
    text-align: center;
}

</style>