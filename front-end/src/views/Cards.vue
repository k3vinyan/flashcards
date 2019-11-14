<template>
  <div>
    <h1>Words</h1>
    <table id="words" class="ui celled compact table">
      <thead>
        <tr>
          <th>English</th>
          <th>German</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(card, i) in words" :key="i">
        <td>{{ card.term }}</td>
        <td>{{ card.defintion }}</td>
        <td width="75" class="center aligned">
            <router-link :to="{ name: 'show', params: { id: word._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">Edit</td>
        <td width="75" class="center aligned">Destroy</td>
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
            cards: []
        }
    },
    async mounted() {
        this.cards = await api.geCards();
    }
}

</script>