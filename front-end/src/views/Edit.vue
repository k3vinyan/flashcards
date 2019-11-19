<template>
    <div>
        <h1>Edit Card</h1>
        <card-form @createOrUpdate="createOrUpdate" :card="this.card"></card-form>
    </div>
</template>

<script>
import CardForm from '../components/CardForm.vue'
//import test from '../components/Test.vue'
import { api }  from '../helpers/helpers'

export default {
    name: 'edit',
    components: {
        'card-form': CardForm
    },
    data: function(){
        return {
            card: {}
        }
    },
    methods: {
        createOrUpdate: async function() {
            console.log(this.card)
            await api.updateCard(this.card); 
           // alert('Card is updated!');

        }
    },
    async mounted() {
        this.card = await api.getCard(this.$route.params.id)
        console.log(this.card)
    }
}

</script>