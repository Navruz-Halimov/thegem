<template>
  <div class="news">
    <div class="news__list">
      <router-link
        v-for="newsItem in news.slice(0, 4)"
        :key="newsItem.id"
        class="news__item"
        to=""
      >
        <div class="news__image">
          <img
            :src="newsItem.image"
            :alt="newsItem.name"
          >
        </div>
        <p class="news__heading">
          Name:
          <router-link :to="`/${newsItem.name}`">
            {{ newsItem.name }}
          </router-link>
        </p>
        <p>location{{ newsItem.location.name }}</p>
        <p>species{{ newsItem.species }}</p>
        <p>Status: {{ newsItem.status }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.getNews();
  },
  methods: {
    getNews() {
      axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => {
          console.log(response.data.results);
          this.news = response.data.results;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.news {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  &__list {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
  }
  &__item {
    text-align: center;
    color: rgb(5, 88, 114);
    max-width: 250px;
    width: 100%;
    flex-basis: 25%;
    margin: 10px 25px 25px 0;
    overflow: hidden;
    border-radius: 5px;
    transition: all 0.3s ease;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    &:hover {
      box-shadow: rgba(108, 245, 188, 0.192) 0px 8px 24px;
    }
  }
  &__image {
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__heading {
    padding-top: 10px;
    padding-bottom: 10px;
    a {
      color: #003bb3;
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
