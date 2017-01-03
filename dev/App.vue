<template>
    <div>
        <Test></Test>
        <div class="message">{{ msg }}</div>
    </div>
</template>

<script>
import Test from './components/Test.vue';

export default {
  data () {
    return {
      msg: 'Hello from vue-loader!'
    }
  },
  components: {
    Test
  }
}
</script>
