<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-12 col-lg-8">
          <div class="header__inner">
            <h1 class="header-heading">
              Enroll Now & Learn
            </h1>          
            <h4 class="header-second">
              Get Access for Award Winning <br>
              Online Courses
            </h4>
            <p class="header-text">
              Manage, track, and achieve your corporate learning goals <br>
              with TheGem LMS.
            </p>
            <div class="header-buttons__wrapper">
              <button
                type="button"
                class="header-btn all-btn"
              >
                All Courses
              </button>
              <button
                type="button"
                class="header-btn sign-btn"
              >
                Sign up Free
              </button>
            </div>
          </div>
        </div>
        <div
          class="col-md-12 col-lg-4"
        >
          <kinesis-element
            :strength="50"
            event="scroll"
          >
            <div class="some" />
          </kinesis-element>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div
            class="header__laptop"
          >
            <kinesis-audio :audio-index="10">
              <kinesis-element
                :strength="
                  10" 
                type="depth"
              >
                <img
                  src="../assets/images/6.png"
                  alt=""
                  class=""
                  style="width:100%; height:auto;"
                >
              </kinesis-element>
            </kinesis-audio>
            <kinesis-element
              class="laptop__img"
              :strength="10"
            >
              <img
                src="../assets/images/7.png"
                alt=""
                class="laptop"
              >
            </kinesis-element>
          </div>
        </div>
        <div class="col-md-6">
          <div class="header-courses">
            <h3 class="header-courses__heading">
              The Prodigious eLearning Courses for <br>
              you
            </h3>
            <p class="header-courses__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              ipsum <br>
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <button
              class="header-courses__btn"
              type="button"
            >
              Discover new Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style lang="scss" scoped>
</style>
