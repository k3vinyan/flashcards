<template>
  <div id="app">
    <div class="ui inverted segment navbar main-header">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/categories" exact class="item">
            <i class="comment outline icon"></i> Flashcards
          </router-link>
          <router-link to="/categories/new" class="item">
            <i class="plus circle icon"></i> New
          </router-link>
          <router-link to="/test" class="item">
            <i class="graduation cap icon"></i> Test
          </router-link>
        </div>
      </div>
    </div>

    <div class="ui text main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style lang="scss">

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

  }

  .main-content {
    flex: 2 1 auto;
  }
}


// #app > div.navbar {
//   margin-bottom: 1.5em;
// }
// .myFlash {
//   width: 250px;
//   margin: 10px;
//   position: absolute;
//   top: 50;
//   right: 0;
// }
// input {
//   width: 300px;
// }
// div.label {
//   width: 120px;
// }
// div.input {
//   margin-bottom: 10px;
// }
// button.ui.button {
//   margin-top: 15px;
//   display: block;
//}
</style>
