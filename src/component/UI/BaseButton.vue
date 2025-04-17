<script>

export default {
props:['type','mode'],
    data(){
        return{

        }
    }
}
</script>

<template>
<button :type='type' :class="mode">
    <slot></slot>
</button>
</template>

<style>
</style>