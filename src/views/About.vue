<template>
  <div>
    <page-navigator></page-navigator>
    <dev-info></dev-info>
  </div>
</template>
<script>
import DevInfo from "../components/DevInfo.vue";
import PageNavigator from "../components/PageNavigator.vue";
export default {
  components: {
    DevInfo,
    PageNavigator,
  },
};
</script>