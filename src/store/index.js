import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingStatus: false,
    news:[],
  },
  getters: {
    loadingStatus: state => state.loadingStatus,
    getNewsList:state=>state.news,
    
  },
  mutations: {
      loadingStatus (state, newLoadingStatus) {
      state.loadingStatus = newLoadingStatus
    },
    setNewsList(state, payload) {
      state.news=payload
    }
  },
  actions: {
    getNews(context,id) {
      // console.log(context)
      context.commit('loadingStatus', true);
      axios.get(`https://rickandmortyapi.com/api/character/?page=${id}`)
        .then((response) => {
          if (response && response.data) {
            context.commit('loadingStatus',false)
            context.commit('setNewsList',response.data.results)
            console.log(response.data.results);
          }
          else {
            console.log("error")
          }
        })
        .catch(err => console.log(err));
    },
  },
  modules: {
  }
})
