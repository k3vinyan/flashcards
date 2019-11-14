<template>
    <div>
        <h1>Cards</h1>
        <div>Card Template Here</div>
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