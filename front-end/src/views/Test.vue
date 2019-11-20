<template>
    <div>
        <h1>Test</h1>
        <template v-for="(card, i) in this.allCards">
            <card-test :card="card" :key="i"></card-test>
        </template>
    </div>
</template>

<script>

import { api } from '../helpers/helpers'
import cardTest from '../components/CardTest.vue'

export default {
    name: 'test',
    components: {
        'card-test': cardTest
    },
    data: function() {
        return {
            allCards: []
        }
    },
    async mounted() {
        this.allCards = await api.getCards();
    }
}
</script>