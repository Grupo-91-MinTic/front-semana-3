<template>
  <div class="home">
    <div v-if="localStorage.token === '1'">
      <contact-card></contact-card>
    </div>
    <div v-else>
    </div>
  </div>
</template>

<script>
import ContactCard from "../components/ContactCard.vue";

export default {
  name: "Home",
  components: {
    ContactCard
  },
};
</script>
