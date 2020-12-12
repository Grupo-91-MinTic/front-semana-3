<template>
  <div class="home">
    <the-home></the-home>
    <contact-card></contact-card>y
  </div>
</template>

<script>
import ContactCard from '../components/ContactCard.vue';
import TheHome from '../components/TheHome.vue';

export default {
  name: "Home",
  components: {
    TheHome,
    ContactCard
  }
};
</script>
