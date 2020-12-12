<template>
  <div>
    <div id="login" class="card m-3 p-3" style="width: 100%">
      <h1 class="bg-success text-center p-2">Sprint III</h1>
      <form class="row justify-content-center">
        <div class="form-group row p-5 m-5">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control border-success"
              id="email"
              placeholder="Email"
              v-model="login.email"
            />
          </div>
          <label for="inputPassword" class="col-sm-2 col-form-label"
            >Password</label
          >
          <div class="col-sm-10">
            <input
              class="form-control border-success"
              placeholder="Password"
              id="inputPassword"
              type="password"
              v-model="login.password"
            />
          </div>
        </div>
        <button
          class="btn btn-success btn-block w-75 my-4"
          @click.prevent="signgin"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async signgin() {
      localStorage.token = 1;
      if (localStorage.token) {
        //swal("Exitoso","login exitoso","success");
        this.$router.push("/home");
      }
    },
  },
};
</script>
<style lang="css">
#login {
  color: #fff;
}
.card {
  background: #2c3e50;
}
</style>