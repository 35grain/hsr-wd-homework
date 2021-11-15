<template>
  <Navigation />
  <div class="container">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
  <FooterComp />
</template>

<script>
  import Navigation from "@/components/Navigation.vue";
  import FooterComp from "@/components/FooterComp.vue";

  export default {
    name: 'App',
    components: {
      Navigation,
      FooterComp
    }
  }
</script>


<style lang="scss">
  /* Vue route change transition */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.35s ease;
  }

  .fade-enter-from,
  .fade-leave-active {
    opacity: 0;
  }

  /* General */
  html {
    min-height: 100%;
  }

  body {
    background-color: #1678bd;
    margin: 0;
    min-height: 100%;

    font-family: 'Roboto', sans-serif;
  }

  .container {
    margin: 0 auto;
    max-width: 55%;
    min-height: 100%;
  }

  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
  }

  a {
    color: #00c4ff;
    transition: 0.3s;

    &:hover {
      color: #009bca;
    }
  }

  input {
    padding: 10px 12px;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    outline: none;

    &:focus {
      border: 1px solid #3a3a3a;
    }
  }

  /* Buttons */
  .btn {
    background-color: #1678bd;
    border-radius: 4px;
    outline: none;
    color: #fff;
    border: none;
    padding: 10px 12px;
    transition: 0.3s;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background-color: #166298;
    }
  }
</style>