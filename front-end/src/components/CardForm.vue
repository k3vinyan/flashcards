<template>
    <form action="#" @submit.prevent="onSubmit">
        <div class="ui labeled input fluid">
            <div class="">
                <input type="text" v-model="card.term" />
                <input type="text" v-model="card.definition" />
            </div>
        </div>
        <button class="positive ui button">Submit</button>
        <p v-if="errorsPresent" class="error">Please fill out both field!</p>
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
            errorsPresent: false
        }
    },
    methods: {
        onSubmit: function() {
            console.log(this.card.term)

            if(this.card.term === "" || this.card.definition === "") {
                this.errorsPresent = true;
            } else {
                this.$emit('createOrUpdate', this.word);
            }
        
        }
        // createOrUpdate: async function(word) {
        //     await api.updateCard(word);
        //     alert('Card updated successfully!');
        //     this.$router.push('')
        // }
    }
 }
</script>

<style scoped>
.error {
    color: red;
}
</style>