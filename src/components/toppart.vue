<template>
  <div class="header__wrapper">
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
    }
</script>


<style lang="scss" scoped>
@media screen and (min-width:2000px) {
  .header__wrapper{
    background-size: cover !important;
   background-position: center top !important; 

  }
}
.header__wrapper {
  background-image: url("../assets/images/1.jpg");
  background-repeat: no-repeat;
  background-position: top center;
//   background-size: contain;
}
</style>