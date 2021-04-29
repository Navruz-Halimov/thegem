<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <!-- <div
            class="header__circle d-none d-md-block"
            style="position: relative;
    left: -271px;"
          >
            <kinesis-container>
              <kinesis-element
                :strength="50"
              >
                <img
                  src="../assets/images/3.png"
                  alt=""
                >
              </kinesis-element>
            </kinesis-container>
          </div> -->
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
          class="col-md-3"
        >
          <kinesis-container>
            <!-- <kinesis-element :strength="60">
              <img
                src="../assets/images/4.png"
                alt=""
                class="circle2"
              >
            </kinesis-element> -->
            <kinesis-element :strength="30">
              <img
                src="../assets/images/2.png"
                alt=""
                class="person"
              >
            </kinesis-element>
            <!-- <kinesis-element :strength="30">
              <img
                src="../assets/images/5.png"
                alt=""
                class="triangle"
              >
            </kinesis-element> -->
          </kinesis-container> 
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="laptop">
            <!-- <img src="../assets/images/laptop.png" alt="" width="500" height="500"> -->
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
.person {
  width: 500px;
  height: 673px;
}
.header__circle {
  img {
    max-width: 200px;
    max-height: 169px;
    width: 100%;
    height: 100%;
  }
}

@media screen and (max-width: 1800px) {
  .person {
    width: 400px;
    height: 470px;
  }
}
</style>
