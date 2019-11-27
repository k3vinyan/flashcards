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
         <router-link to="" class="flashcards-item-icon">
          <i class="big edit icon"></i>
        </router-link>
        <router-link :to="linktoFlashCards(category._id)" class="flashcards-item-title">
          <h2>{{category.title}}</h2>
          <p>{{category.subTitle}}</p>
        </router-link>
        <a class="flashcards-item-icon delete-icon" @click="deleteCategory(category)">
          <i class="trash big alternate outline icon"></i>
        </a>
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

<style lang="scss" scoped>
@import '../stylesheets/style.css.scss';

ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0 5px 0 5px;

  li > a {
    color: $font-color;
  }
}


.flashcards-new-item, .flashcards-item {
  display: flex;
  position: relative;
  width: 100%;
  height: 100px;
  border: 1px solid $primary-color;
  margin: 5px 0  5px 0;
  background: $primary-color;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 2px 2px 10px;


  .flashcards-item-title {
    display: flex;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .flashcards-item-icon {

    flex-grow: 0;
    i {
      margin: 10px 10px 10px 10px;
    }
  }
}

.flashcards-new-item{
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>