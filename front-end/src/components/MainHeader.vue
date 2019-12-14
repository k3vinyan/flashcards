<template>
    <div class="main-header">
        <div class="navbar">
          <ul>
            <li>
              <router-link to="/categories" exact class="item">
                <i class="home icon"></i> Flashcards
              </router-link>
            </li>
            <li>
              <import-button></import-button>
            </li>
            <li>
              <router-link to="/test" class="item">
                <i class="graduation cap icon"></i> Test
              </router-link>
            </li>
          </ul>
        </div>
    </div>
</template>

<script>
import importButton from './ImportButton'

export default {
    name: 'main-header',
    components: {
      'import-button': importButton
    }
}
</script>