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
              <router-link to="/categories/new" class="item">
                <i class="plus circle icon"></i> 
              </router-link>
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
export default {
    name: 'main-header'
}
</script>