<template>
    <div>
        <ul class="toolbar-list">
            <li :class="{ active: bold.isActive }" @click="onClick">
                <i class="bold icon"></i>
            </li>
            <li :class="{ active: italic.isActive }" @click="onClick">
                <i class="italic icon"></i>
            </li>
            <li :class="{ active: list.isActive }" @click="onClick"> 
                <i class="list icon"></i>
            </li>
            <li :class="{ active: underline.isActive }" @click="onClick">
                <i class="underline icon"></i>
            </li>
            <li :class="{ active: subscript.isActive }" @click="onClick">
                <i class="subscript icon"></i>
            </li>
            <li :class="{ active: superscript.isActive }" @click="onClick">
                <i class="superscript icon"></i>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "toolbar",
    data: function(){
        return {
            bold:           { isActive: false },
            italic:         { isActive: false },
            list:           { isActive: false },
            underline:      { isActive: false },
            subscript:      { isActive: false },
            superscript:    { isActive: false }
        }
    },
    methods: {
        onClick(e) {
            const item = e.target.classList[0];
            this[item].isActive = !this[item].isActive;
            this.$emit('styling', this[item]);
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../stylesheets/style.css.scss';

.toolbar-list {
    display: flex;
    justify-content: space-around;
    
  
}

li {
    text-align: center;
    color: $mid-grey-color;
    padding: 2px 2px 2px 2px;
}

.active {
    color: $primary-color;
    font-weight: bolder;
}

</style>