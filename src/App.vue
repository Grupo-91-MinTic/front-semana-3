<template>
  <div id="app">
    <div id="nav" v-if="token">
        <nav class="navbar navbar-expand-lg">
          <router-link class="navbar-brand" to="/home">Home</router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
              </li>
            </ul>

            <form class="form-inline my-2 my-lg-0">
              <router-link class="nav-link" to="/">Sign out</router-link>
            </form>
          </div>
        </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

#nav {
  padding: 30px;
  background: #2c3e50;
}

#nav a {
  color: #fff;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
