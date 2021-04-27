<template>
  <div class="popular-courses">
    <div class="container">
      <div class="popular-courses__header">
        <div class="popular-courses__title">
          Popular Courses
        </div>
        <h4 class="popular-courses__heading">
          Choose your Category
        </h4>
      </div>
      <!-- /.popular-courses__header -->
      <div class="row mt-5">
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item ml-3 mr-3 m-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/web-development.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                Development
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-4 ml-3 mr-3 m-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/growth.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                Business
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/development.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                IT and Software
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 ">
          <div class="popular-courses__item mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/2905191.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                UI Design
              </p>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row mt-0 mt-md-5">
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-0 mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/graphic-design.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                UX Design
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/target.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                Marketing
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/photo.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                Photography
              </p>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-6">
          <div class="popular-courses__item mt-4 mt-md-0 ml-3 mr-3 mr-sm-0 ml-sm-0">
            <router-link
              to=""
              class="popular-courses__item-link"
            >
              <img
                src="../assets/images/guitar.svg"
                alt="icon"
                class="popular-courses__item-img"
              >
              <p class="popular-courses__item-title">
                Music
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.popular-courses {
  &__header {
    font-family: "Jost", sans-serif;
    font-weight: 500;
    text-align: center;
    padding: 160px 21px 80px;
  }
  &__title {
    line-height: 30px;
    color: #ff6a6d;
    font-size: 20px;
  }
  &__heading {
      margin-top: 5px;
    line-height: 70px;
    color: #030080;
    font-size: 50px;
  }
  &__item{
      cursor: pointer;
      background-color: #fff;
    border-radius: 50px 50px 50px 50px;
    padding: 50px 0;
    box-shadow: -6px 14px 35px 0 rgb(255 106 109 / 15%);
    transition: all .3s ease;
    &:hover {
        background-color: #f5eee6;
        &-title{
             color: #ff6a6d !important;
        }

    }
    &-link{
        text-align: center;
        display: block;
    }
    &-img{
        max-width:96px;
        width:100%;
        max-height: 96px;
        height: 96px;
        margin-bottom: 25px;
    }
    &-title{
        margin-top: 20px;
        margin-bottom: 0;
        color: #030080!important;
        font-size: 20px;
        line-height: 30px;
        font-weight: 500;
        transition: all 0.3s ease-in-out;
    }
  }
}
</style>
