<template>
  <div class="navbar">
    <div class="navbar__desktop" :class="{ navbaronscroll: scroll }">
      <div class="container">
        <div class="navbar-inner d-none d-md-block">
          <div class="row align-items-xl-center justify-lg-space-between">
            <div class="text-center text-xl-left col-xl-3">
              <router-link to="/" class="navbar-link">
                <img
                  class="navbar__logo"
                  id="image"
                  :src="require(`../assets/images/${newImageUrl}.png`)"
                  width="170px"
                  height="40px"
                />
              </router-link>
            </div>
            <div class="col-xl-9 d-flex justify-content-center d-xl-block">
              <ul class="navbar-menu">
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Home
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Courses
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Services
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Teachers
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Pricing
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Blog
                  </router-link>
                </li>
                <li class="navbar-menu__item">
                  <router-link class="navbar-menu__link" to="">
                    Contact
                  </router-link>
                </li>
                <li class="navbar-menu__item navbar-menu__item-search">
                  <router-link class="navbar-menu__link" to="">
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
                      />
                      <i class="fa fa-search" aria-hidden="true" />
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-mobile d-block d-md-none">
      <div class="w-100" :class="{ navbaronscroll: scroll }">
        <div class="navbar-mobile__header">
          <router-link to="/" class="navbar-link">
            <img
              id="image"
              :src="require(`../assets/images/${newImageUrl}.png`)"
              width="132"
              height="33"
            />
          </router-link>
          <button
            id="remove"
            :class="[
              'menu-toggle dl-trigger',
              { toggle: toggle, close: !toggle },
            ]"
            @click="[(toggle = !toggle), removeclass()]"
          >
            Primary Menu
            <span :class="[scroll ? 'grey' : ' ']" class="menu-line-1" />
            <span :class="[scroll ? 'grey' : ' ']" class="menu-line-2" />
            <span :class="[scroll ? 'grey' : ' ']" class="menu-line-3" />
          </button>
        </div>
      </div>
      <div class="navbar-mobile__inner">
        <div
          id="menu__close"
          :class="[
            'navbar-mobile__menu',
            { 'navbar-mobile__menu-open': toggle },
          ]"
        >
          <ul class="navbar-mobile__list">
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Home
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Courses
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Services
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Teachers
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Pricing
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Blog
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <router-link class="navbar-mobile__link" to="">
                Contact
              </router-link>
            </li>
            <li class="navbar-mobile__item">
              <div class="minisearch">
                <form action="">
                <input type="search">
                <input type="submit">
                </form>
              </div>
              <router-link class="navbar-mobile__link" to="">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showModal: false,
      windowTop: 0,
      scroll: false,
      display: false,
      toggle: false,
      newImageUrl: "logo_white"
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.removeclass();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    removeclass() {
      setTimeout(function() {
        var remove = document.querySelector("#remove");
        remove.classList.remove("close");
      }, 300);
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop > 100) {
        this.scroll = true;
        this.newImageUrl = "logo_blue";
      } else {
        this.newImageUrl = "logo_white";
        this.scroll = false;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.navbaronscroll {
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  width: 100%;
  z-index: 9999;
  .navbar-menu__link {
    color: #030080 !important;
    &:hover {
      color: #ff6a6d !important;
    }
  }
}
</style>
