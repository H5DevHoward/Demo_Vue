<template>
    <div class="router-test">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/" replace>Go to Nav</router-link>
            <router-link to="/edit" replace>Go to Edit</router-link>
            <router-link to="/shop" replace>Go to Shop</router-link>
            <router-link to="/search" replace>Go to Search</router-link>
            <router-link to="/filter" replace>Go to Filter</router-link>
            <router-link :to="{ name: 'foo', params: { id: 123 }}">Go to Foo</router-link>
            <router-link to="/vuex" replace>Go to Vuex</router-link>
        </p>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
