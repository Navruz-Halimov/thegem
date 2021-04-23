<template>
  <div class="main__wrapper">
    <navbar />
    <middle />
    <courses />
    <gototop />
  </div>
</template>

<script>
import navbar from "@/components/navbar";
import middle from "@/components/header";
import gototop from "@/components/gototop";
import courses from '@/components/courses';
export default {
  components: {
    navbar,
    middle,
    gototop,
    courses,
  }
};
</script>

<style lang="scss" scoped>
.main__wrapper {
  background-image: url("../assets/images/1.jpg");
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  margin-bottom: 400px;
}
</style>