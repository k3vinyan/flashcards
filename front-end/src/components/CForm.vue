<template>
    <div class="card">
        <textarea class="card-term"       v-model="card.term"       placeholder="Term"/>
        <textarea class="card-definition" v-model="card.definition" placeholder="Definition"/>
        <button   class="card-submit"     @click="onSubmit">Submit</button>
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

<style scoped lang="scss">
$base-color: #c6538c;
@mixin blue-border {
    border: 1px lightblue solid;
}

.card {
    display: flex;
    flex-direction: column;
    @include blue-border();
    height: 90%;
    padding: 10px 10px 10px 10px;

    .card-term {
        @include blue-border();
        flex: 1 1 auto;
    }

    .card-definition {
        @include blue-border();
        flex: 1 1 auto;
    }
    .card-submit {
        flex: 0 1 auto;
    }

}

// center placehoder
::-webkit-input-placeholder {
    color: lightblue;
    text-align: center;
    font-size: 90px;
    padding: auto;
    display: inline-block;
    vertical-align: middle;
}
:-moz-placeholder {
    /* Firefox 18- */
    color: lightblue;
    text-align: center;
    vertical-align: middle;
}
::-moz-placeholder {
    /* Firefox 19+ */
    color: lightblue;
    text-align: center;
    vertical-align: middle;
}
:-ms-input-placeholder {
    color: lightblue;
    text-align: center;
    vertical-align: middle;
}

</style>