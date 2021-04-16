<template>
  <div class="main__wrapper">
    <navbar />
    <middle />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import middle from "@/components/header";
export default {
  components: {
    navbar,
    middle
  }
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  background-image: url("../assets/images/1.jpg");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: cover;
  margin-bottom: 400px;
}
</style>