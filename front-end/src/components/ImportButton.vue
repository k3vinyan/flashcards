<template>
    <div>
        <input type="file" id="file-input" />  
        <button @click="onClick">
            Import
        </button>
    </div>
 
</template>

<script>
import { parseExcel } from '../js/script.js';


export default {
    name: "import-button",
    methods: {
        onClick() {
            const file = document.getElementById('file-input');
            const item = parseExcel(file, function(item) {
                console.log(item)
                return item;
            });

            setTimeout(function() {
                console.log(item)
            }, 3000)
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../stylesheets/style.css.scss';

button {
    color: $font-color;
}


</style>

