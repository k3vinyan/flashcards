<template>
  <div class="template-container">

    <header class="template-header">
      <h1 class="template-header-title">flashcards</h1>
    </header>

    <div class="template-container">
      <ul class="template-container-list">
        <li class="template-container-list-item-new">
          <router-link to="/categories/new">
            <i class="big plus circle icon"></i>
          </router-link>
        </li>
        <li v-for="(category, i) in categories" :key="i" class="template-container-list-item">
          <router-link :to="'/categories/' + category._id + '/cards/edit'" class="template-container-list-item-icon">
            <i class="big edit icon left-icon"></i>
          </router-link>
          <router-link :to="linktoFlashCards(category._id)" class="template-container-list-item-title">
            <h2>{{category.title}}</h2>
            <p>{{category.subTitle}}</p>
          </router-link>
          <a class="template-container-item-icon delete-icon" @click="deleteCategory(category)">
            <i class="trash big alternate outline icon right-icon"></i>
          </a>
        </li>
      </ul>
    </div>

    
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
    },
    viewEdit: function(category) {
      this.$router.push({  name: 'category-edit', params: { id: category._id}})
    }
  },
  async mounted() {
    this.categories = await api.categories.getCategories();
  }
}
</script>

<style lang="scss" scoped>
@import '../stylesheets/style.css.scss';


.template-container {

  .template-container-list {
    padding: 0 10px 0 10px;

    .template-container-list-item-new, .template-container-list-item {
      display: flex;
      justify-content: center;
      align-items: center;
      background: $primary-color;
      height: 100px;
      border-radius: 5px 5px 5px 5px;
      margin: 5px 5px 5px 5px;
      
        .template-container-item-title {
          flex-grow: 2;
        }

        .template-container-item-icon {
          flex-grow: 0;
        }
        a {
          color: $font-color;
        }

        i {
          color: $font-color;
        }
    }

    .template-container-list-item-new {
      position: relative;
      background: #ffffff;
      left: 5px;      
      width: calc(100% - 20px);
      box-shadow: 0 0 0px 6px $primary-color;
      margin-bottom: 10px;

      i {
        color: $primary-color;
      }
    }

    .template-container-list-item {
      position: relative;
      justify-content: space-between;
      padding: 0 10px 0 10px;

      .left-icon {
        position: absolute;
        top: 10px;
        left: 10px;
      }

      .right-icon {
        position: absolute;
        top: 10px; 
        right: 10px;
      }
    }

  }
}

</style>