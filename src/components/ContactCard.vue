<template>
  <div>
    <div id="contact" class="card m-3 bg-dark" style="max-width: 540px">
      <div class="row no-gutters">
        <div class="col-md-4 p-3">
          <img :src="user.avatar" class="card-img" :alt="user.name" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title text-center">{{ user.name }}</h5>
            <blockquote class="text-center">{{ user.rol }}</blockquote>
            <p class="card-text text-justify">{{ user.description }}</p>
            <a :href="user.profile" class="btn btn-success d-block" target="blank"
              >Meet me</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueJwtDecode from "vue-jwt-decode";
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    getUserDetails() {
      let token = localStorage.getItem("jwt");
      let decoded = VueJwtDecode.decode(token);
      this.user = decoded;
    }
  },
  created() {
    this.getUserDetails();
  },
};
</script>
<style lang="css">
#contact {
  color: #fff;
  background: #000;
}
</style>