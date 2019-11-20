<template>
    <div class="card" @click="flipCard">
        <div class="card-inner" :style="styleFlipCard">
            <div class="card-front">
                <div>{{card.term}}</div>
            </div>
            <div class="card-back">
                <div>{{card.definition}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card-test',
    props: {
        card: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            styleFlipCard: {
                transform: 'rotateY(0deg)'
            }
        }
    },
    methods: {
        flipCard: function() {
            if(this.styleFlipCard.transform === 'rotateY(0deg)') {
                this.styleFlipCard = {
                    transform: 'rotateY(180deg)'
                }
            } else {
                this.styleFlipCard = {
                    transform: 'rotateY(0deg)'
                }
            }
            
        }
    }
}
</script>

<style scoped>
.card {
    background: transparent;
    width: 300px;
    height: 100px;
    perspective: 1000px;
    margin: 10px 10px 10px 10px;
}
.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(247, 170, 170, 0.2);
}

.card-front, .card-back {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.card-front {
    background: red;
    color: black;
}



.card-back {
    background: #2980b9;
    color: black;
    transform: rotateY(180deg);
}
</style>