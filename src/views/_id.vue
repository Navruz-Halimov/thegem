<template>
  <div class="news__list">
    <p>{{ getNewsList[$route.params.id-1].name }}</p>
    <p>status :{{ getNewsList[$route.params.id-1].status }}</p>
    <img
      :src="getNewsList[$route.params.id-1].image"
      alt=""
    >
  </div>
</template>

<script>
import some from './News';
    import { mapGetters } from "vuex";
    export default {
        data(){
            return{
                user:[],
            }
        },
            computed: {
          ...mapGetters(["getNewsList","loadingStatus"]),
        },
        created(){
          console.log(some)
        },
        methods:{
        }
  }
</script>

<style lang="scss" scoped>

</style>