<template>
    <div class="wrapper">
        <!-- <nav-menu-component /> -->
        <!-- <edit-component /> -->
        <!-- <shopping-cart-component /> -->
        <!-- <search-component /> -->
        <!-- <filter-component /> -->
        <router-test />
    </div>
</template>

<script>
import RouterTest from './components/RouterTest.vue';

export default {
    data () {
        return {
            msg: 'Hello World!'
        }
    },
    components: {
        RouterTest,
    }
}
</script>
<style lang="scss" rel="stylesheet/scss" src="./style/style.scss"></style>
