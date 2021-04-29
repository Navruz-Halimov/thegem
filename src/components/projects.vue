<template>
  <div class="pojects">
    <div class="container">
      <div class="projects__inner">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <div
              class="projects__item"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <img
                src="../assets/images/18-1.png"
                alt=""
              >
              <div
                class="projects__counter"
              >
                <animated-number
                  :value="value"
                  :format-value="formatToPrice"
                  :duration="5000"
                  :delay="10"
                />
                <span class="projects__title">Topics Learned</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div
              class="projects__item"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img
                src="../assets/images/19-1.png"
                alt=""
              >
              <div
                class="projects__counter"
              >
                <animated-number
                  :value="value2"
                  :format-value="format"
                  :duration="5000"
                  :delay="10"
                />
                <span class="projects__title">Students Genius</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div
              class="projects__item"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-once="true"
            >
              <img
                src="../assets/images/21-1.png"
                alt=""
              >
              <div
                class="projects__counter"
              >
                <animated-number
                  :value="value3"
                  :format-value="format"
                  :duration="5000"
                  :delay="10"
                />
                <span class="projects__title">Tests Taken Thats a Lot
                </span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div
              class="projects__item"
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-once="true"
            >
              <img
                src="../assets/images/20-1.png"
                alt=""
              >
              <div
                class="projects__counter"
              >
                <animated-number
                  :value="value4"
                  :format-value="formatToPrice"
                  :duration="5000"
                  :delay="10"
                />
                <span class="projects__title">Instructors all Trained
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AnimatedNumber from "animated-number-vue";
export default {
  

   components: {
    AnimatedNumber
  },
  data() {
    return{
     value: 600,
     value2: 3480,
     value3: 15900,
     value4: 270,
    };
  },
 methods: {
   format(value){
     return `${value.toFixed(0)}`
   },
    formatToPrice(value) {
      return `${value.toFixed(0)}+`;
    }
    }
};
</script>
<style scoped>

</style>