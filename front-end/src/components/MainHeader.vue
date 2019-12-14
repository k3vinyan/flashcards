<template>
    <div class="main-header">
        <div class="navbar">
          <ul>
            <li>
              <router-link to="/categories" exact class="item">
                <i class="home icon"></i> <p>Flashcards</p>
              </router-link>
            </li>
            <li>
              <a href="#">
                <input type="file" id="file-input" /> 
                <i class="cloud upload icon" @click="onClick"></i> <p>Import</p>
             </a>
            </li>
            <li>
              <router-link to="/test" class="item">
                <i class="graduation cap icon"></i> <p>Test</p>
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import { parseExcel } from '../js/script.js';

export default {
  name: 'main-header',
  methods: {
    onClick() {
      const file = document.getElementById('file-input');
      parseExcel(file, function(arr) {
        this.$emit('parseExcel', arr)
      });        
    }
  }
}
</script>

<style lang="scss" scoped>

@import '../stylesheets/style.css.scss';

.main-header {
  
  .navbar {
    background: $primary-color;

    ul {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0;

      li {

       a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
       }

        .item {
          color: $font-color;
        }
      }
    }
  }
}
</style>