<template>
  <div class="feed">
    <Post/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Post from "@/components/Post.vue";

  export default {
    name: "Posts",
    components: {
      Post,
    },
  };
</script>

<style lang="scss">
  /* Feed */
  .feed {
    background-color: #fff;
    padding: 75px 100px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    margin: 25px 0;
  }
</style>