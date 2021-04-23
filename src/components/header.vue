<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="header__circle" style="position: relative;
    left: -271px;">
             <kinesis-container>
              <kinesis-element :strength="100">
                <img src="../assets/images/3.png" alt="">
              </kinesis-element>
          </kinesis-container>
          </div>
          <div class="header__inner">
            <h1 class="header-heading">Enroll Now & Learn</h1>
            <h4 class="header-second">
              Get Access for Award Winning <br />
              Online Courses
            </h4>
            <p class="header-text">
              Manage, track, and achieve your corporate learning goals <br />
              with TheGem LMS.
            </p>
            <div class="header-buttons__wrapper">
              <button type="button" class="header-btn all-btn">
                All Courses
              </button>
              <button type="button" class="header-btn sign-btn">
                Sign up Free
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
            <kinesis-container>
              <kinesis-element :strength="110">
                <img src="../assets/images/4.png" alt="">
              </kinesis-element>
              <kinesis-element :strength="50">
                <img src="../assets/images/2.png" alt="">
              </kinesis-element>
               <kinesis-element :strength="60">
                <img src="../assets/images/5.png" alt="">
              </kinesis-element>
          </kinesis-container>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="laptop">
            <img src="../assets/images/laptop.png" alt="" width="500" height="500">
          </div>
        </div>
        <div class="col-md-6">
          <div class="header-courses">
            <h3 class="header-courses__heading">
              The Prodigious eLearning Courses for <br> you
            </h3>
            <p class="header-courses__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              ipsum <br />
              reprehenderit in voluptate velit esse cillum dolore.
            </p>
            <button class="header-courses__btn" type="button">
              Discover new Courses
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="header-couses">
          {{counter}}
          <button @click="counter++"> press me</button>
          <input type="text" v-model="someText">
        </div> -->
    </div>
  </header>
</template>

<script>
export default {
  
  data() {
    return {
      counter: null,
      someText: "",
    };
  },
  watch: {
    counter(newVal, oldVal) {
      console.log("oldwalue", oldVal, "newvalue", newVal);
    },
    someText() {
      this.updateCounter();
    },
  },
  methods: {
    updateCounter() {
      this.counter++;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-family: "Jost", sans-serif;
  padding: 100px 21px 0;
  &-heading {
    line-height: 100px;
    color: #fff;
    letter-spacing: 0;
    font-size: 90px;
  }
  &-second {
    line-height: 70px;
    color: #fff;
    letter-spacing: 0;
    font-size: 50px;
    font-weight: 500;
  }
  &-text {
    color: #fff;
    line-height: 30px;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 0;
    margin: 45px 0 95px;
  }
  &-btn {
    text-transform: none;
    padding: 15px 30px;
    letter-spacing: 0;
    font-size: 24px;
    outline: none;
    border: none;
    cursor: pointer;
    margin-left: 10px;
    border-radius: 40px;
    &.all-btn {
      color: #fff;
      background-color: rgba(255, 106, 109, 1);
      transition: all 0.3s ease;
      &:hover {
        background-color: #fff;
        color: #ff6a6d;
      }
    }
    &.sign-btn {
      background-color: #ff6a6d00;
      border-style: solid;
      border-width: 2px;
      border-color: #ff6a6d;
      box-shadow: 4px 8px 0 0 rgb(115 79 32 / 11%);
      color: #fff;
      transition: all 0.3s ease;
      margin-left: 50px;
      &:hover {
        color: #fff;
        background-color: #ff6a6d;
      }
    }
  }
  .laptop{
    margin-top: 200px;
    margin-bottom: 0;
    padding: 311px 0 0;
  }
  &-courses {
    margin-top: 200px;
    margin-bottom: 0;
    padding: 311px 0 0;
    &__heading {
      color: #030080;
      font-size: 50px;
      font-weight: 500;
      font-family: "Jost", sans-serif;
    }
    &__text {
      color: #030080;
      line-height: 30px;
      font-size: 16px;
      font-weight: 400;
      font-family: "Montserrat", sans-serif;
      margin: 50px 0 0;
    }
    &__btn {
      cursor: pointer;
      padding: 15px 25px 16px;
      margin: 60px 0 0;
      line-height: 1;
      color: #fff;
      font-weight: 500;
      font-family: "Jost", sans-serif;
      font-size: 19px;
      letter-spacing: 0.05em;
      line-height: 1;
      border-radius: 25px 25px 25px 25px;
      background-color: #ad00f7;
      box-shadow: 4px 8px 0 0 rgb(115 79 32 / 11%);
      border: none;
      transition: background-color .3s ease,border-color .3s ease;
      &:focus,&:hover{
            background-color: #030080;
      }
    }
  }
}
</style>
