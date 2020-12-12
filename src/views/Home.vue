<template>
  <div class="home">
    <page-navigator></page-navigator>
    <div>
      <contact-card></contact-card>
    </div>
  </div>
</template>

<script>
import ContactCard from "../components/ContactCard.vue";
import PageNavigator from "../components/PageNavigator.vue";

export default {
  name: "Home",
  components: {
    ContactCard,
    PageNavigator
  }
};
</script>
