<template>
  <div class="main__wrapper">
    <toppart />
    <courses />
    <gototop />
    <FooterContent />
  </div>
</template>

<script>
import toppart from '@/components/toppart';
import gototop from "@/components/gototop";
import courses from '@/components/courses';
import FooterContent from '../components/footer.vue';
export default {
  components: {
    toppart,
    gototop,
    courses,
    FooterContent,
  }
};
</script>
