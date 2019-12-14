<template>
    <div class="main-header">
        <div class="navbar">
          <ul>
            <li>
              <router-link to="/categories" exact>
                <i class="home icon"></i> <p>Flashcards</p>
              </router-link>
            </li>
            <li>
              <a href="#" @click="onClick">
                <input type="file" id="file-input" @change="onChange"/> 
                <i class="cloud upload icon"></i> <p>Import</p>
             </a>
            </li>
            <li>
              <router-link to="/test">
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
      const input = document.getElementById('file-input');
      input.click();
    },
    onChange(){
      const that = this;
      const file = document.getElementById('file-input');
      const fileName = file.files[0].name.replace(/.xlsx/g, '');
      parseExcel(file, function(arr) {
        const payload = {
          fileName: fileName,
          data: arr
        }
        that.$emit('createFlashcards', payload)
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
      position: relative;
      justify-content: space-around;
      list-style: none;
      padding: 0;
      right: 20px;

      li {

      a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: $font-color;
      }

        .item {
          color: $font-color;
        }
      }
    }
  }

  #file-input {
    border: black solid 1px;
    position: absolute;
    width: 65px;
    height: 65px;
    visibility: hidden;
  }
}
</style>