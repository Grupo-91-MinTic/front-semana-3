<template>
  <div>
    <h4>Sprint III</h4>
    <hr />
    <p class="text-justify">
      Proyecto desarrollado por el grupo 91, ciclo III; misión Tic 20-22;
      desarrollado por Andrés Manuel Prieto Alvarez, Carlos Sneider Soto, Juan Sebastian Orduz, Harold Alejandro 
    </p>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      console.log("holadecode", decoded);
      this.user = decoded;
    },
    logUserOut() {
      localStorage.removeItem("jwt");
      this.$router.push("/");
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>
<style lang="css">
</style>

