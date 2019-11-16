<template>
  <div>
    <h1>Cards</h1>
    <table id="cards" class="ui celled compact table">
      <thead>
        <tr>
          <th>Term</th>
          <th>Defintion</th>
          <th colspan="3"></th>
        </tr>
      </thead>
       <tr v-for="(card, i) in allCards" :key="i">
        <td>{{card.term}}</td>
        <td>{{card.definition}}</td>
        <td class="center aligned">
          <router-link :to="{ name: 'show', params: { id: card._id}}">Show</router-link>
        </td>
        <td class="center aligned">Edit</td>
        <td class="center aligned">Destroy</td>
       </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
    name: 'Cards',
    data() {
        return {
            allCards: []
        }
    },
    async mounted() {
      this.allCards = await api.getCards();
    }
}

</script>