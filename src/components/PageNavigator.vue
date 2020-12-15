<template>
  <div>
    <nav class="bg-dark p-5 text-white">
      <router-link class="text-white text-center p-2" to="/home"
        ><span>Home</span></router-link
      >
      |
      <router-link class="text-white text-center p-2" to="/about"
        ><span>About</span></router-link
      >
      |
      <router-link class="text-white text-center p-2" to="/"
        ><span @click.prevent="logOutUser">Sing out</span></router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  name: "page-navigator",
  methods: {
    logOutUser() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
};
</script>

<style lang="css">
</style>