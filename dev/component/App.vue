<template>
    <div class="wrapper">
        <!-- <nav-menu-component /> -->
        <!-- <edit-component /> -->
        <!-- <shopping-cart-component /> -->
        <!-- <search-component /> -->
        <!-- <filter-component /> -->
        <vuex-test />
        <router-test />
    </div>
</template>

<script>
import RouterTest from './RouterTest.vue';
import VuexTest from './VuexTest.vue';

export default {
    components: {
        RouterTest,
        VuexTest,
    }
}
</script>
<style lang="scss" rel="stylesheet/scss" src="../style/style.scss"></style>
