<template>
  <div class="main__wrapper">
    <navbar />
    <middle />
    <!-- <something /> -->
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import middle from "@/components/header";
// import something from "@/components/something";
export default {
  components: {
    navbar,
    middle,
    // something,
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