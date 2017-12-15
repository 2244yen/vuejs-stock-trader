<template>
  <div class="container">
    <v-header></v-header>
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Header from './components/pages/Header.vue'
  export default {
    components: {
      'v-header': Header
    },
    created () {
      this.$store.dispatch('initStocks')
    }
  }
</script>

<style>
  body {
    padding: 30px;
  }
  .slide-enter-active {
    /*animation-name: slide-in;
    animation-duration: 0.2;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;*/
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    /*animation-name: slide-out;
    animation-duration: 0.2;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;*/
    animation: slide-out 200ms ease-out forwards;
  }
  @keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
