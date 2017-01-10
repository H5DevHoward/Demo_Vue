<template>
    <div class="router-test">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/nav" replace>Go to Nav</router-link>
            <router-link to="/edit" replace>Go to Edit</router-link>
            <router-link to="/shop" replace>Go to Shop</router-link>
            <router-link to="/search" replace>Go to Search</router-link>
            <router-link to="/filter" replace>Go to Filter</router-link>
            <router-link :to="{ name: 'foo', params: { id: 123 }}">Go to Foo</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
</style>
