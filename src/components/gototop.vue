<template>
  <div class="gotop__wrapper">
    <div
      to=""
      class="gotop gotop-show"
      id="scrollToTop"
      @click="scrollToTop()"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollToTop() {
        setTimeout(
            function()
            { window.scrollTo({top: 0, behavior: 'smooth'});
            }, 300);
        console.log("gototop")
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      let classToggle = document.querySelector("#scrollToTop");
      if (this.windowTop > 100) {
        this.scroll = true;
        classToggle.classList.add("gotop-show");
      } else {
        classToggle.classList.remove("gotop-show");
        this.scroll = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.gotop__wrapper {
  display: inline-block;
  vertical-align: top;
}
.gotop {
    cursor: pointer;
  display: inline-block;
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 40px;
  right: 10px;
  box-shadow: 0 0 10px rgb(0 0 0 / 5%);
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  background: #2c59aa url("../assets/images/cd-top-arrow.svg") no-repeat center
    50%;
  visibility: hidden;
  opacity: 0.3;
  transition: opacity 0.3s 0s, visibility 0s 0.3s, background-color 0.3s 0s;
  z-index: 50;
  &:hover{
    background-color: #30c3f0;
    color: #30c3f0;
    box-shadow: rgba(48, 195, 240, 0.7) 0px 8px 24px;
  }
  &-show {
    visibility: visible !important;
    opacity: 1 !important;
  }
}
</style>
