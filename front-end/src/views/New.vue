<template>
    <div>
        <h1>New Card</h1>
        <card-form :card="this.card"></card-form>
    </div>
</template>

<script>
import CardForm from '../components/CardForm.vue'

export default {
    name: 'new',
    components: {
        'card-form': CardForm
    },
    data: function() {
        return {

        }
    }
}
</script>