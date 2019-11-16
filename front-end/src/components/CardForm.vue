<template>
    <form action="#" @submit.prevent="onSubmit">
     <p v-if="errorsPresent" class="error">Please fill out both field!</p>

     <div class="ui labeled input fluid">
        <div class="">
        <input type="text" v-model="card.term" />
        <input type="text" v-model="card.definition" />
        </div>
     </div>
    <button class="positive ui button">Submit</button>
    </form>
</template>

<script>


export default {
    name: 'card-form',
    props: {
        card: {
            type: Object,
            required: false
        }
    },
    data: function() {
        return {

        }
    },
    methods: {
        onSubmit: function() {
            console.log(this.card._id)
        }
    }
 }
</script>

<style scoped>
.error {
    color: red;
}
</style>