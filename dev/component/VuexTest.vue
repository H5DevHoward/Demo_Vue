<template>
    <div id="vuex-test">
    <p>{{ todoCount }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: mapGetters([
        'todoCount',
    ]),
    methods: mapActions([
        'increment',
        'decrement',
    ]),
}
</script>

<style>
</style>
