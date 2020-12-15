<template>
  <div>
    <div id="login" class="card mt-3 pt-3" style="width: 100%">
      <h1 class="bg-success text-center p-2">Sprint III</h1>
      <form class="row justify-content-center" @submit.prevent="loginUser">
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
          @click.prevent="loginUser"
          type="submit"
        >
          Sign in
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import VueJwtDecode from "vue-jwt-decode";
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        user: {},
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async loginUser() {
      try {
        let response = await this.$http.post("/api/auth/signin", this.login);
        let token = response.data.accessToken;
        localStorage.setItem("jwt", token);

        let decoded = VueJwtDecode.decode(token);
        console.log("holadecode", decoded);

        if (token) {
          let token = localStorage.getItem("jwt");
          let decoded = VueJwtDecode.decode(token);

          swal("Exitoso", "Bienvenido " + decoded.name, "success");
          this.$router.push("/home");
        }
      } catch (error) {
        swal("Error", "Este registro no existe", "error");
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