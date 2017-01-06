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
import NavMenuComponent from './components/NavMenuComponent.vue';
import EditComponent from './components/EditComponent.vue';
import ShoppingCartComponent from './components/ShoppingCartComponent.vue';
import SearchComponent from './components/SearchComponent.vue';
import FilterComponent from './components/FilterComponent.vue';
import RouterTest from './components/RouterTest.vue';

export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  components: {
    NavMenuComponent,
    EditComponent,
    ShoppingCartComponent,
    SearchComponent,
    FilterComponent,
    RouterTest,
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" src="./style/style.scss"></style>
