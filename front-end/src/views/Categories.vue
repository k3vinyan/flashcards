<template>
  <div>
    <header class="flashcards-header">
      <h1>flashcards</h1>
      </header>
    <ul class="flashcards-list">
      <li class="flashcards-new-item">
        <router-link to="/categories/new">
          <i class="big plus circle icon"></i>
        </router-link>
      </li>
      <li v-for="(category, i) in categories" :key="i" class="flashcards-item">
        <a class="flashcards-item-icon" @click="deleteCategory(category)">
          <i class="trash alternate outline icon"></i>
        </a>
        <router-link :to="linktoFlashCards(category._id)">
          <h2>{{category.title}}</h2>
          <p>{{category.subTitle}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { api }  from '../helpers/helpers';

export default {
  name: "categories",
  data: function() {
    return {
      categories: []
    }
  },
  methods: {
    linktoFlashCards: function(id) {
      return `/categories/${id}/cards`
    },
    deleteCategory: async function(category) {
      await api.categories.deleteCategory(category)
      this.removeCategory(category._id)
    },
    removeCategory: function(id) {
      this.categories = this.categories.filter( (categories) => {
        return categories._id != id;
      })
    }
  },
  async mounted() {
    this.categories = await api.categories.getCategories();
  }
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0 5px 0 5px;
}

li {
  display: flex;
  justify-content: center;
  align-items: center;
}

li > a {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.flashcards-new-item, .flashcards-item {
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  margin: 5px 0  5px 0;
}

.flashcards-item-icon{
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  margin: 10px 10px 10px 10px;
}


</style>