<template>
  <div class="news__wrapper">
    <v-div v-if="loadingStatus">
      <Loader />
    </v-div>
    <div
      v-else
      class="news"
    >
      <form
        action=""
        @submit.prevent=""
      >
        <input
          v-model="search"
          type="text"
        > 
      </form>
      <div class="news__list">
        <router-link
          v-for="newsItem in filteredList"
          :key="newsItem.id"
          class="news__item"
          :to="`/news/${newsItem.id}`"
        >
          <div class="news__image">
            <img
              :src="newsItem.image"
              :alt="newsItem.name"
            >
          </div>
          <div class="news__heading">
            Name:<router-link :to="newsItem.name">
              {{ newsItem.name }}
            </router-link>
            <p>location{{ newsItem.location.name }}</p>
            <p>species{{ newsItem.species }}</p>
            <p>Status: {{ newsItem.status }}</p>
          </div>
        </router-link>
      </div>
      <div class="pagination__list">
        <ul class="pagination">
          <li class="pagination__item">
            <button
              v-for="item in 34"
              :key="item"
              class="pagination__link"
              @click="getitem(item)"
            >
              {{ item }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios"
import Loader from "@/components/utility/loader";
import { mapGetters } from "vuex";
export default {
  name: "News",
  components: {
    Loader,
  },
  data() {
    return {
      search:'',
      val:null,
    };
  },

  computed: {
    ...mapGetters(["getNewsList","loadingStatus"]),
    filteredList() {
      return  this.getNewsList.filter((item)=>item.name.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
    methods:{
      get () {
        axios.get('https://rickandmortyapi.com/api/character/?page=1')
  .then((res)=>{
    console.log("bu",res)
    this.getNewsLists=res.data.results;
  })

    },
getitem(val){
  this.val=val
  this.$store.dispatch("getNews",this.val);
  console.log(val)
  // axios.get(`https://rickandmortyapi.com/api/character/?page=${val}`)
  // .then((res)=>{
    //   console.log("bu",res)
  //   this.getNewsList=res.data.results;
  // })
}
  },
};
</script>

<style lang="scss" scoped>
.news {
  // max-width: 1200px;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  &__list {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
   width: 600px;
    height: 220px;
    display: flex;
    overflow: hidden;
     background: rgb(60, 62, 68);
    border-radius: 0.5rem;
    margin: 0.75rem;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    &:hover {
      box-shadow: rgba(108, 245, 188, 0.192) 0px 8px 24px;
    }
  }
  &__image {
      flex: 2 1 0%;
      width: 100%;
    img {
    width: 100%;
    height: 100%;
    margin: 0px;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
}
  }
  &__heading {
    padding-top: 10px;
    padding-bottom: 10px;
    a {
      flex: 3 1 0%;
    position: relative;
    padding: 0.75rem;
    color: rgb(255, 255, 255);
      font-size: 18px;
      font-weight: bold;
      transition: all 0.3s ease;
      &:hover {
        color: greenyellow;
      }
    }
  }
}
</style>
