<template>
  <div class="main__wrapper">
    <navbar />
    <header class="header" />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
export default {
  components: {
    navbar,
  },
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  background-image: url("../assets/images/1.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  height: 5000px;
}
</style>