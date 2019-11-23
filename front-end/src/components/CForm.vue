<template>
    <div>
        <ul>
        </ul>
            <div>
                <div class="card">
                    <textarea v-model="card.term" placeholder="Term"/>
                    <textarea v-model="card.definition" placeholder="Definition"/>
                    <button @click="onSubmit">Submit</button>
                </div>
            </div>
        </div>
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
    methods: {
        onSubmit: function() {
            this.$emit('createOrUpdate', this.card)
        }
    }

}
</script>

<style scoped>
textarea {
    width: 300px;
    height: 300px;
}
</style>