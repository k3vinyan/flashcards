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
        <td class="center aligned">
          <router-link :to="{ name: 'edit', params: {id: card._id}}">Edit</router-link>
        </td>
        <td class="center aligned" @click.prevent="onDestroy(card._id)">
          <a :href="`/cards/${card._id}`">Destroy</a>
        </td>
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
    methods:  {
      onDestroy: async function(id) {
        //api.deleteCard(id)

        const sure = window.confirm('Are you sure you want to delete the card?');
        if (!sure) return;

        await api.deleteCard(id);
        const newCards = this.allCards.filter(card => card._id !== id);
        this.allCards = newCards;
      }
    },
    async mounted() {
      this.allCards = await api.getCards();
    }
}

</script>