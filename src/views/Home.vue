<template>
  <div class="home">
    <page-navigator></page-navigator>
    <div class="container-xl p-0 m-0">
      <div class="row p-0 m-0">
        <div class="col-xs-12 col-md-12 col-lg-6">
          <contact-card></contact-card>
        </div>
        <div class="col-sm-12 col-lg-6 p-5">
          <the-home></the-home>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageNavigator from "../components/PageNavigator.vue";
import ContactCard from "../components/ContactCard.vue";
import TheHome from "../components/TheHome.vue";

export default {
  name: "Home",
  components: {
    PageNavigator,
    ContactCard,
    TheHome,
  },
};
</script>
