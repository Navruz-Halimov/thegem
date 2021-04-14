/* eslint-disable vue/valid-v-bind */
<template>
  <div
    class="navbar"
    :class="{nota:some}"
  >
    <div class="container">
      <div
        id="navbar"
        class="navbar-inner d-none d-md-block"
      >
        <div class="row align-items-xl-center">
          <div class="text-center text-xl-left col-xl-3">
            <router-link
              to="/"
              class="navbar-link"
            >
              <img
                src="../assets/images/logo_white.png"
                alt=""
              >
            </router-link>
          </div>
          <div class="col-xl-9 d-flex justify-center justify-sm-center d-xl-block ">
            <ul class="navbar-menu">
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Home
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Courses
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Services
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Teachers
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Pricing
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Blog
                </router-link>
              </li>
              <li class="navbar-menu__item">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  Contact
                </router-link>
              </li>
              <li class="navbar-menu__item navbar-menu__item-search">
                <router-link
                  class="navbar-menu__link"
                  to=""
                >
                  <i
                    v-if="!showModal"
                    class="fa fa-search"
                    aria-hidden="true"
                    @click="showModal = !showModal"
                  />
                  <i
                    v-if="showModal"
                    class="fa fa-times"
                    aria-hidden="true"
                    @click="showModal = !showModal"
                  />
                </router-link>
                <div :class="['navbar-search__modal', { active: showModal }]">
                  <form
                    action=""
                    class="navbar-search__modal-form"
                    @submit.prevent
                  >
                    <input
                      type="text"
                      placeholder="Search..."
                      class="navbar-search__modal-input"
                    >
                    <i
                      class="fa fa-search"
                      aria-hidden="true"
                    />
                  </form>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p style="position:fixed;">
      <!-- {{ windowTop }} -->
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
       windowTop: 0,some:false,
    }
  },
 mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if(this.windowTop>100){
        this.some=true;
        console.log({ top: this.windowTop,},this.some);
      }else{
        this.some=false;

        console.log("this is not gonna happen",this.some)
      }
    }
  }
}
</script>
<style scoped lang="scss">
.nota{
  position: fixed;
  background-color: #f7f3fc;
  width: 100%;
  .navbar-menu__link{
    color: #030080 !important;
    &:hover{
      color: #ff6a6d !important;
    }
  }
}
</style>
