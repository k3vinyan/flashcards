<template>
    <div class="card">
        <textarea 
            class="card-term"       
            v-model="card.term"       
            placeholder="Term"
        />
        <textarea 
            class="card-definition" 
            id="card-defintion-id" 
            v-model="card.definition" 
            placeholder="Definition" 
            @input="test" 
        />
        <button   
            class="card-submit"     
            @click="onSubmit"
        >
            Submit
        </button>
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
        },
        getElementProperty: function(el) {
            const fontSize = window.getComputedStyle(el, null).getPropertyValue('font-size').replace(/px/g, '');
            const width = window.getComputedStyle(el, null).getPropertyValue('width').replace(/px/g, '');
            const height = window.getComputedStyle(el, null).getPropertyValue('height').replace(/px/g, '');
            const lineHeight = window.getComputedStyle(el, null).getPropertyValue('line-height').replace(/px/g, '');
            const paddingWidth = window.getComputedStyle(el, null).getPropertyValue('padding-top').replace(/px/g, '') * 2;
            const paddingHeight =window.getComputedStyle(el, null).getPropertyValue('padding-right').replace(/px/g, '') * 2;

            const elProperty = {
                el: el,
                fontSize: fontSize,
                lineHeight: lineHeight,
                width: width,
                height: height,
                paddingWidth: paddingWidth,
                paddingHeight: paddingHeight,
                value: el.value
            }

            //console.log(elProperty);
            return elProperty;
        },
        getBaseChange: function(elProperty) {
            const basePoint = Math.floor((elProperty.height - elProperty.paddingHeight) / elProperty.fontSize);
            return basePoint;
        },
        getWidthChange: function(elProperty) {
            const basePoint = (Math.floor((elProperty.width - elProperty.paddingWidth) / elProperty.fontSize))* 2;
            return basePoint;
        },
        getStringLengthChange: function(elProperty) {
            const basePoint = (elProperty.width * elProperty.height) / (elProperty.fontSize * elProperty.fontSize);
            return basePoint;
        },
        getFontSize: function(elProperty, basePoint, changeType) {
            let point = basePoint; 
            
            if(changeType === "increase") {
                point++;
            } else if(changeType === "decrease") {
                point--;
            }
            const fontSize = Math.floor((elProperty.height - elProperty.paddingHeight) / point);
            return fontSize;
        },
        test: function() {
            let el = document.getElementById("card-defintion-id");       
            const elProperty = this.getElementProperty(el);
            let basePoint = this.getBaseChange(elProperty);
            let fontSize = this.getFontSize(elProperty, basePoint, "increase") + "px";

            let lineBreakCount = 0;

            for(let i = 0; i < elProperty.value.length; i++) {
            
                if(elProperty.value[i] === '\n') {
                    lineBreakCount++;
                }

                if(lineBreakCount >= basePoint) {
                    el.style.fontSize = fontSize;
                    el.style.lineHeight = fontSize;
                }
            }

                
        }
    }

}
</script>

<style scoped lang="scss">

@import "../stylesheets/style.css.scss";

@mixin blue-border {
    border: 1px lightblue solid;
}

.card {
    display: flex;
    flex-direction: column;
    @include blue-border();
    height: 90%;
    padding: 10px 10px 10px 10px;

    textarea {
        font-size: 56px;
        line-height: 56px;
        resize: none;
    }

    .card-term {
        @include blue-border();
        text-align: center;
        flex: 1 1 100px;
        text-align: center;
        padding: auto;
        display: inline-block;
        line-height: 200px;
    }

    .card-definition {
        @include blue-border();
        flex: 1 1 100px;
    }
    .card-submit {
        background: $primary-color;
        color: $font-color;
        padding: 2px 0 2px 0;
        flex: 0 1 auto;
    }

}

// center placehoder
::-webkit-input-placeholder {
    text-align: center;
    font-size: 70px;
    padding: auto;
    display: inline-block;
    line-height: 200px;
}
:-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
    vertical-align: middle;
}
::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
    vertical-align: middle;
}
:-ms-input-placeholder {
    text-align: center;
    vertical-align: middle;
}

</style>