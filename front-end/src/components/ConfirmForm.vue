<template>
    <div class="container">
        <div class="content">
            <h1>Save Form</h1>
            <label>Title</label>
            <input v-model="category.title"/>
            <!-- <p>flashcards: {{category.cards.length}}</p> -->
             <p>flashcards: 0</p>
            <button @click.prevent="onCancel">Cancel</button>
            <button @click.prevent="onSubmit">Save</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'save-form',
    props: {
        category: {
            type: Object,
            required: false
        }
    },
    methods: {
        onCancel: function() {
            this.$emit('cancel');
        },
        onSubmit: function() {
            this.$emit('saveAndExit', this.category);
        },
        getCardCount: function() {
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            background: white;
            width: 80%;
            height: 50%;
            border-radius: 50px 50px 50px 50px;

            input {
                border: 1px black solid;
            }
        }
    }
</style>
