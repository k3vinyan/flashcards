<template>
    <div>
        <h1>New Card</h1>
        <card-form @createOrUpdate="create" :card="this.card"></card-form>
    </div>
</template>

<script>
import CardForm from '../components/CardForm.vue'
import { api } from '../helpers/helpers'

export default {
    name: 'new',
    components: {
        'card-form': CardForm
    },
    data: function() {
        return {
            card: {}
        }
    },
    methods: {
        create: async function(card) {
            const saveCard = await api.createCard(card);
            this.$router.push(`/cards/${saveCard._id}`);
        }
    }
}
</script>