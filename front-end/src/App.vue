<template>
  <div id="app">
    <main-header></main-header>

    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'

export default {
  name: 'app',
  components: {
    'main-header': MainHeader
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
