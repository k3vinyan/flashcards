<template>
  <div id="app">
    <main-header @createFlashcards="createFlashcards"></main-header>
    <div class="main-content">
      <router-view  :flashcards="categories" @deleteCategory="deleteFlashcards" />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import { api } from './helpers/helpers'

export default {
  name: 'app',
  components: {
    'main-header': MainHeader
  },
  data: function() {
    return {
      categories: [],
      category: null
    }
  },
  methods: {
    createFlashcards: function(payload) {
      let that = this;

      const data = payload.data;
      const ref = data["!ref"];
      const maxRow = ref[ref.length -1];
  
      api.categories.createCategory({ title: payload.fileName }).then( async function(category) {
        for(let i = 1; i < maxRow; i++) {
          const aRow = "A" + i;
          const bRow = "B" + i;
        
          const term = data[aRow].v
          const definition = data[bRow].v

          const payload = {
            category,
            card: {
              term,
              definition
            }
          }

          console.log(payload);

          api.cards.createCard(payload)
        }
        
        that.categories = await api.categories.getCategories();
      })
    },
    deleteFlashcards: function(category) {
      api.categories.deleteCategory(category)
      this.removeFlashcard(category._id)
    },
    removeFlashcard: function(id) {
      this.categories = this.categories.filter( (categories) => {
        return categories._id != id;
      })
    }
  },
  async beforeCreate() {
    this.categories = await api.categories.getCategories();
  }

};
</script>

<style lang="scss">

@import 'stylesheets/style.css.scss';

html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}


#app {
  display: flex;
  flex-direction: column;
  height: 100%;

  .main-header {
    background: $primary-color;
  }

  .main-content {
    flex: 2 1 auto;
  }

}



</style>
