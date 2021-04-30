<template>
  <kinesis-container class="outer__wrapper">
    <div class="main__wrapper">
      <toppart />
      <courses />
      <gototop />
      <projects />
      <FooterContent />
    </div>
  </kinesis-container>
</template>

<script>
import toppart from '@/components/toppart';
import gototop from "@/components/gototop";
import courses from '@/components/courses';
import projects from '@/components/projects';
import FooterContent from '@/components/footer.vue';
export default {
  components: {
    toppart,
    gototop,
    courses,
    projects,
    FooterContent,
  }
};
</script>
